import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Da Kraal Foundation | Think Africa. Feel Africa. Know Africa.',
  description: 'Da Kraal Foundation — Building a Better Future, Rooted in African Values.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
