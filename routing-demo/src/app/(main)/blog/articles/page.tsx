import Link from "next/link";

export default function Articles() {
  return (
    <div className="p-4">
      <Link href="../blog">Back to Blog</Link>
      <h1>Articles</h1>
      <div>
        <Link className="mr-2" href="articles/1">Article 1</Link>
        <Link className="mr-2" href="articles/2">Article 2</Link>
        <Link className="mr-2" href="articles/3">Article3</Link>
      </div>
    </div>
  );
}