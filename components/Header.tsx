'use client'
import dynamic from 'next/dynamic'

import Link from 'next/link'

import { useState } from 'react'

import { FaBars } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

import ThemeSwitcher from './ThemeSwitcher'

import { author, links } from '@/blog.config'
import Logo from './Logo'

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false })

const Header = () => {
    const [toggleNavBar, setToggleNavBar] = useState<boolean>(false)

    const handleClickNavbarBars = (): void => {
        setToggleNavBar(!toggleNavBar)
    }

    return (
        <header className="flex w-full justify-between xl:w-3/6">
            <Link href="/" className="flex w-1/6 items-center justify-center " aria-label={author}>
                <Logo />
            </Link>
            <div className="hidden w-4/6 items-center justify-end md:flex">
                <ul className="flex space-x-10 text-[#868c96] dark:text-silver">
                    {links.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                title={item.name}
                                className="capitalize hover:text-black dark:hover:text-white"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mr-5 flex items-center space-x-10">
                <ThemeSwitcher />
                <button
                    onClick={handleClickNavbarBars}
                    className="py-1"
                    aria-label="toggle mobile navbar"
                >
                    {toggleNavBar ? (
                        <IoClose fontSize={25} className="fill-slate dark:fill-silver md:hidden" />
                    ) : (
                        <FaBars fontSize={25} className="fill-slate dark:fill-silver md:hidden" />
                    )}
                </button>
            </div>
            <MobileNav toggleNavBar={toggleNavBar} />
        </header>
    )
}

export default Header
