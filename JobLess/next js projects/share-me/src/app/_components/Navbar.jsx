import React from 'react';
// & ICONS
import { FaShareAltSquare } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className='navbar'>
            <header class="bg-gray-950">
                <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a class=" text-blue-500 flex flex-nowrap items-center gap-1 capitalize" href="#">
                        {/* <FaShareAltSquare className='text-xl ' /> */}
                        <h1 className='text-xl font-semibold'>shareMe</h1>
                    </a>

                    <div class="flex flex-1 items-center justify-end md:justify-end gap-5">
                        {/* <nav aria-label="Global" class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </nav> */}

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <a
                                    class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 "
                                    href="#"
                                >
                                    Login
                                </a>

                                <a
                                    class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Register
                                </a>
                            </div>

                            <button
                                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                                <span class="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
}
