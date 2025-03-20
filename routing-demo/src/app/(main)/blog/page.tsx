import { Geist, Geist_Mono } from "next/font/google";
import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import { Metadata } from "next"
import Link from "next/link"
import { resolve } from "path";

export const metadata: Metadata = {
  // title: 'Blog', this uses the default title from layout.tsx
  title: {
    absolute: 'My Blog',
  }
}

export default async function Blog() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Intentional delay...");
    }, 2000)
  })
  return (
    <div className="p-4">
    <h1>Welcome to my Blog 2025!</h1>
    <Link className="mr-2" href="blog/articles/breaking-news-123?lang=en">Read in English</Link>
    <Link href="blog/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  )
  
}