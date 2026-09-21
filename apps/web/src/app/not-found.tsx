import Link from "next/link";
export default function NotFound() {
  return (
    <div className="overview">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>
        Let’s get you
        <br />
        back to the library.
      </h1>
      <p className="intro">
        That page doesn’t exist. Browse the collection to find the skill you
        need.
      </p>
      <Link className="text-link" href="/">
        Explore the skills →
      </Link>
    </div>
  );
}
