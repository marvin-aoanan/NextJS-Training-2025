import Link from "next/link";

export default function F1Page() {
  return (
    <div>
      <h1>F1 page</h1>
      <Link className="mr-2" href="/f1/f2">Go to F2 page</Link>
      <Link className="mr-2" href="/f3">Go to F3 page</Link>
    </div>
  );
}