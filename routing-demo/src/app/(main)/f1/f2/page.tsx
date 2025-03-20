import Link from "next/link";

export default function F2Page() {
  return (
    <div>
      <h1>F2 page</h1>
      <Link className="mr-2" href="/f4">Go to F4 page</Link>
    </div>
  );
}