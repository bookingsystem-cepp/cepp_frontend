import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CE-KMITL Booking System',
    description: 'This web application is part of the Computer Engineering Project Preparation 2023.',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
  }