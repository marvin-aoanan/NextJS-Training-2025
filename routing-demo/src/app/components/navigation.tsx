import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="p-4">
      <Link className="ml-2" href="/">Home</Link>
      <Link className="ml-2" href="/blog">Blog</Link>
      <Link className="ml-2" href="/login">Login</Link>
      <Link className="ml-2" href="/register">Register</Link>
    </div>
  );
}