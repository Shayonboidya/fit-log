
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { NavLinksButton } from './navLinksButton';

const NavBer = () => {
    const navLinks = [
        { name: "Workouts", link: "/" },
        { name: "My Plan", link: "/my-plan" },
    ];
    


    return (
        <header className="sticky top-0 z-50 w-full border-b border-base-300/70  shadow-sm backdrop-blur-xl">

            <div className="navbar mx-auto min-h-16 max-w-7xl px-3 sm:px-5 md:min-h-[76px] lg:px-8">

                {/* Navbar Start */}
                <div className="navbar-start gap-1">

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-start lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Open navigation menu"
                            className="btn btn-ghost btn-circle btn-sm sm:btn-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[60] mt-4 w-56 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
                        >
                            {navLinks.map((navLink) => (
                                <li key={navLink.name}>
                                    <Link
                                        href={navLink.link}
                                        className="rounded-xl px-4 py-3 font-semibold transition-all hover:bg-green-100 hover:text-green-700"
                                    >
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */} 
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-1.5 sm:gap-2.5"
                    >
                        <Image
                            src={logo}
                            alt="FITLOG logo"
                            width={32}
                            height={32}
                            priority
                            className="h-5 w-5 object-contain sm:h-9 sm:w-9"
                        />

                        <span className="text-lg font-extrabold tracking-tight text-white sm:text-2xl">
                            FIT<span className="text-green-500">LOG</span>
                        </span>
                    </Link>

                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 xl:gap-3">

                        {navLinks.map((navLink) => (
                            <li key={navLink.name}>
                                <Link
                                    href={navLink.link}
                                    className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 text-white hover:bg-green-100 hover:text-green-700 xl:text-base"
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>

                {/* Navbar End */}
               <NavLinksButton></NavLinksButton>
               

            </div>
        </header>
    );

};

export default NavBer;
