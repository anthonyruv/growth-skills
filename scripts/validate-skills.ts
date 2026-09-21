import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
const root = join(import.meta.dir, "..");
const skills = (
  await readdir(join(root, "skills"), { withFileTypes: true })
).filter((s) => s.isDirectory());
if (!skills.length) throw new Error("No skills found");
for (const skill of skills) {
  const text = await readFile(
    join(root, "skills", skill.name, "SKILL.md"),
    "utf8",
  );
  const front = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!front) throw new Error(`${skill.name}: missing frontmatter`);
  const meta = Bun.YAML.parse(front[1]!) as {
    name?: string;
    description?: string;
  };
  if (meta.name !== skill.name || !/^[a-z0-9-]{1,63}$/.test(meta.name))
    throw new Error(`${skill.name}: invalid name`);
  if (!meta.description || meta.description.length > 1024)
    throw new Error(`${skill.name}: invalid description`);
  await readFile(join(root, "skills", skill.name, "references/sources.md"));
  await readFile(join(root, "apps/web/content", `${skill.name}.mdx`));
  console.log(`Validated ${skill.name}`);
}
