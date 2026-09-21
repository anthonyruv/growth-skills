import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { zipSync, strToU8, type Zippable } from "fflate";
const root = join(import.meta.dir, "..");
const out = join(root, "apps/web/public/downloads");
await mkdir(out, { recursive: true });
const skills = await readdir(join(root, "skills"), { withFileTypes: true });
for (const skill of skills.filter((s) => s.isDirectory())) {
  const files: Zippable = {};
  async function collect(relative: string) {
    for (const entry of (
      await readdir(join(root, "skills", skill.name, relative), {
        withFileTypes: true,
      })
    ).sort((a, b) => a.name.localeCompare(b.name))) {
      const path = join(relative, entry.name);
      if (entry.isDirectory()) await collect(path);
      else
        files[`${skill.name}/${path}`] = [
          strToU8(
            await readFile(join(root, "skills", skill.name, path), "utf8"),
          ),
          { mtime: new Date("2026-01-01T00:00:00Z") },
        ];
    }
  }
  await collect("");
  await writeFile(join(out, `${skill.name}.zip`), zipSync(files));
  console.log(`Packaged ${skill.name}`);
}
