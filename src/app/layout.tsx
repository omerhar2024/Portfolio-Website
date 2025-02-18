import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/variables.css'
import '@/styles/globals.css'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omer Haroon - Product Leader',
  description: 'Strategic Product Leader building user-centric solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
} 