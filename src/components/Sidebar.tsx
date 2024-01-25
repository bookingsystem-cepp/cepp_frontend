"use client"

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/CalendarMonth';
import ProfileIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link'

const sidebarItems = [
    {
        name: 'Home',
        href: '/home',
        icon: HomeIcon
    },
    {
        name: 'History',
        href: '/history',
        icon: HistoryIcon
    },
    {
        name: 'Profile',
        href: '/profile',
        icon: ProfileIcon
    }
]

export default function Sidebar() {
  return (
    <div>
        <Disclosure as="nav">
            <Disclosure.Button 
            className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900">
                <MenuIcon 
                className="block md:hidden h-6 w-6" 
                aria-hidden="true" />
            </Disclosure.Button>
            <div
            className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                <div 
                className='flex flex-col justify-start items-center'>
                    <Link href='/home'>
                        <h1 
                        className='text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full'>
                            Booking System
                        </h1>
                    </Link>
                    <div
                    className='my-24 border-b border-gray-100 pb-4'>
                    {sidebarItems.map(({name, href, icon: Icon}) => (
                        <Link href={href}>
                            <div
                            className='flex mb-12 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <Icon 
                                className="text-2xl text-gray-600 group-hover:text-white"/>
                                <h3
                                className='text-base text-gray-800 group-hover:text-white font-semibold'>
                                    {name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                    </div>
                    <div
                    className='my-60'>
                        <Link href='/login'>
                            <div
                            className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <LogoutIcon 
                                className="text-2xl text-gray-600 group-hover:text-white"/>
                                <h3
                                className='text-base text-gray-800 group-hover:text-white font-semibold'>
                                    Logout
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Disclosure>
    </div>
  );
};

