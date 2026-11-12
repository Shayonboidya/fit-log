
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const NavBer = () => {
    const navLinks = [
        { name: "Workouts", link: "/" },
        { name: "My Plan", link: "/my-plan" },
    ];
    const navLinksButton = [
        { name: "Plan", link: "/" },
        { name: "Saved", link: "/" }
    ]


    return (
        <header className="sticky top-0 z-50 w-full border-b border-base-300/70 bg-base-100/95 shadow-sm backdrop-blur-xl">

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

                        <span className="text-lg font-extrabold tracking-tight sm:text-2xl">
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
                                    className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-green-100 hover:text-green-700 xl:text-base"
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">

                    {/* Desktop / Tablet Buttons */}
                    <ul className="items-center gap-2 flex sm:gap-3">
                        {navLinksButton.map((navlinkButton, index) => (
                            <li key={navlinkButton.name}>
                                <Link
                                    href={navlinkButton.link}
                                    className={`btn min-h-9 h-9 rounded-full px-3 text-xs font-bold transition-all duration-300 sm:px-4 sm:text-sm md:h-10 md:px-5 ${index === navLinksButton.length - 1
                                        ? "border-none bg-green-500 text-white shadow-md shadow-green-500/20 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg"
                                        : "btn-ghost hover:bg-green-50 hover:text-green-700"
                                        }`}
                                >
                                    {navlinkButton.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Primary Button */}
                    {/* {navLinksButton.length > 0 && (
                        <Link
                            href={navLinksButton[navLinksButton.length - 1].link}
                            className="btn min-h-9 h-9 rounded-full border-none bg-green-500 px-3 text-xs font-bold text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:bg-green-600 sm:hidden"
                        >
                            {navLinksButton[navLinksButton.length - 1].name}
                        </Link>
                    )} */}

                </div>

            </div>
        </header>
    );

};

export default NavBer;
