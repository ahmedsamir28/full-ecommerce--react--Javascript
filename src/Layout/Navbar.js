import React from 'react';
import { useEffect, useRef, useState } from "react";
import { Input, initTE, Dropdown, Ripple, } from 'tw-elements';
import logo from "../Assets/Images/E-shop.png";
import NavbarSearchHook from '../Custom/search/navbarSearchHook';
import UnopDropdown from "unop-react-dropdown";
import GetAllUserCartHook from '../Custom/Cart/GetAllUserCartHook';

const Navbar = () => {
    const [OnChangeSearch, searchWord] = NavbarSearchHook()
    const [navbar, setNavbar] = useState(false);

    let word = ""
    if (localStorage.getItem("searchWord") != null) {
        word = localStorage.getItem("searchWord")
    }

    const [user, setUser] = useState('');

    useEffect(() => {
        initTE({ Input, Dropdown, Ripple });

        if (localStorage.getItem("user") != null)
            setUser(JSON.parse(localStorage.getItem("user")))
    }, []);

    const logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser('')
    }

    const [itemsNum] = GetAllUserCartHook()

    return (
        <>
            <nav className="w-full bg-navbar shadow z-40">
                <div className="justify-between py-1 container m-auto md:items-center md:flex md:px-8">

                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">

                            <a href="/">
                                <img src={logo} className='w-20' />
                            </a>

                            <div className="relative m-auto  hidden xll:inline-block" data-te-input-wrapper-init>
                                <input
                                    style={{ width: "700px" }}
                                    // type="text"
                                    onChange={OnChangeSearch}
                                    value={word}
                                    className="peer  block min-h-[auto]  rounded border-0 bg-transparent px-20  lg:px-52 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleSearch2"
                                    placeholder="Type query"
                                />
                                <label
                                    htmlFor="exampleSearch2"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                >
                                    Search
                                </label>
                            </div>

                            <div className="xll:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>


                            <div className="hidden space-x-2 xll:inline-block">

                                {
                                    user != '' ? (
                                        <UnopDropdown trigger={<button className='px-4 py-1.5 text-white bg-base rounded-md shadow hover:bg-amber-400'>{user.name}</button>}>
                                            <ul className='border border-base py-2 w-40 px-4 mt-1 text-white rounded-lg bg-navbar'>
                                                {
                                                    user.role === "admin" ? (<li className='hover:text-base'> <a href='/admin/products'> <i class="fa-solid fa-solar-panel"></i> Control Panel</a> </li>
                                                    ) : (<li className='hover:text-base'> <a href='/user/allorders'><i class="fa-regular fa-id-badge"></i> Profile Page</a> </li>)
                                                }
                                                <li onClick={logOut} className='mt-1 hover:text-base'> <a href='/'><i class="fa-solid fa-right-from-bracket"></i> log out</a> </li>
                                            </ul>
                                        </UnopDropdown>
                                    ) : (<a
                                        href="/login"
                                        className="px-4 py-2 text-white bg-base rounded-md shadow hover:bg-amber-400"
                                    >
                                        Sign in <i class="ml-2 fa-solid fa-user"></i>
                                    </a>)
                                }

                                <a
                                    href="/cart"
                                    className="relative px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Cart <i class="ml-1 fa-solid fa-cart-shopping"></i>
                                    <span class="absolute bottom-5 left-20 rounded-full h-5 w-5 flex justify-center items-center bg-base">
                                {itemsNum || 0}
                            </span>
                                </a>
                            </div>

                        </div>
                    </div>


                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className=" z-50 items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <div className="relative" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        onChange={OnChangeSearch}
                                        value={word}
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-20  lg:px-52 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleSearch2"
                                        placeholder="Type query"
                                    />
                                    <label
                                        htmlFor="exampleSearch2"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                        Search
                                    </label>
                                </div>
                            </ul>

                            <div className="mt-3 space-y-2 md:hidden md:flex">

                                {
                                    user != '' ? (
                                        <UnopDropdown trigger={<button className='px-4 py-1.5  text-center w-80 text-white bg-base rounded-md shadow hover:bg-amber-400'>{user.name}</button>}>
                                            <ul className='border border-base py-2 w-40 px-4 mt-1 text-white rounded-lg bg-navbar'>
                                                {
                                                    user.role === "admin" ? (<li className='hover:text-base'> <a href='/admin/products'> <i class="fa-solid fa-solar-panel"></i> Control Panel</a> </li>
                                                    ) : (<li className='hover:text-base'> <a href='/user/profile'><i class="fa-regular fa-id-badge"></i> Profile Page</a> </li>)
                                                }
                                                <li onClick={logOut} className='mt-1 hover:text-base'> <a href='/'><i class="fa-solid fa-right-from-bracket"></i> log out</a> </li>
                                            </ul>
                                        </UnopDropdown>
                                    ) : (<a
                                        href="/login"
                                        className="inline-block w-full px-4 py-2 text-center text-white  bg-base rounded-md shadow hover:bg-amber-400"
                                    >
                                        Sign in <i class="ml-2 fa-solid fa-user"></i>
                                    </a>)
                                }

                                <a
                                    href="/cart"
                                    className="relative inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Cart <i class="ml-2 fa-solid fa-cart-shopping"></i>
                                    <span class="absolute bottom-7 right-0 rounded-full h-7 w-7 flex justify-center items-center bg-base">
                                {itemsNum || 0}
                            </span>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </nav>
        </>
    );
}

export default Navbar;
