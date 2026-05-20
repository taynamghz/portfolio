import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Taynam Alzamel',
  description:
    'Designer and engineer working in Riyadh, on systems that route around the constraints they were meant to solve for.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lora.variable}>
      <body>{children}</body>
    </html>
  )
}
