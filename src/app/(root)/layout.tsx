import type { Metadata } from 'next';
import Sidebar from '../../components/Sidebar';
import '../../style/globals.css';

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
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <div className='bg-primary flex-1 p-4 text-white border-1 border-dashed'>
        {children}
      </div>
    </div>
  )
}
