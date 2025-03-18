import { Metadata } from "next"

export const metadata: Metadata = {
  // title: 'Blog', this uses the default title from layout.tsx
  title: {
    absolute: 'My Blog',
  }
}

export default function Blog() {
  return <h1>My Blog</h1>
}