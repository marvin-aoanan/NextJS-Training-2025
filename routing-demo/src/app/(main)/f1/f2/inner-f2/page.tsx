import Link from "next/link";

export default function InnerF2Page() {
  return (
    <div>
      <h1>Inner F2 page</h1>
      <Link className="mr-2" href="/f5">Go to F5 page</Link>
    </div>
  );
}