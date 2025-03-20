import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <h1>Hello World</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
    </div>
  );
}
