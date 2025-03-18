"use client"

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

import Link from "next/link"
import Footer from "../components/footer"
import { usePathname } from "next/navigation"


const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot password" },
]

export default function AuthLayout({ children, }: { children: React.ReactNode; }) { // with children as props and type React.ReactNode
  const pathname = usePathname();
  return ( 
    <html lang="en">
      <body>
        
        <nav className="bg-gray-800 text-white p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`) && link.href !== "/"
              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={isActive ? "font-bold mr-4" : "mr-4"} >
                    {link.label}
                </Link>
              )
            })}
            </nav>
            <main className="p-4">
              {children}
            </main>
            <Footer />
        
      </body>
    </html>
  )
}