import React from "react";
import { useEffect } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import logo from "../../Assets/Images/E-shop-1.png";
import { Link } from "react-router-dom";
import LoginHook from "../../Custom/Auth/LoginHook";
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress] = LoginHook()
    useEffect(() => {
        initTE({ Input, Ripple });
    }, []);

    return (
        <section className="gradient-form h-full bg-neutral-200 " style={{height:'800px'}} >
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className=" block rounded-lg bg-white  shadow-lg d">
                            <div className="g-0 lgg:flex justify-between ">

                                <div className="px-4 md:px-0 lgg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto pt-6 w-40"
                                                src={logo}
                                                alt="logo"
                                            />
                                            <h4 className="text-navbar mb-12 mt-6 pb-1 text-xl font-semibold">
                                                We are The E-shop Team
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4 text-navbar">Please login to your account</p>
                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    value={email}
                                                    onChange={onChangeEmail}
                                                    type="email"
                                                    className="focus:text-black text-zinc-500 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            <div className="relative mb-4" data-te-input-wrapper-init>
                                                <input
                                                    value={password}
                                                    onChange={onChangePassword}
                                                    type="password"
                                                    className="focus:text-black text-zinc-500 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    onClick={onSubmit}
                                                    className=" mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="button"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right,#fac90a, #ee7724)",
                                                    }}
                                                >
                                                    Log in
                                                </button>
                                                <Link to="/user/forget-password" className="text-navbar">Forgot password?</Link>
                                            </div>

                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2 text-navbar">Don't have an account?</p>
                                                <a href="/register"
                                                    className="inline-block rounded border-2 border-base px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-navbar transition duration-150 ease-in-out hover:border-amber-500 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-amber-500 focus:border-amber-600 focus:text-amber-600 focus:outline-none focus:ring-0 active:border-amber-700 active:text-amber-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                >
                                                    Register
                                                </a>
                                            </div>
                                        </form>
                                    </div>

                                    {
                                        isPress === true ? (loading === true ? (
                                            <div className='m-auto '>
                                                <div
                                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                    role="status"
                                                >
                                                    <span
                                                        className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip:rect(0,0,0,0)"
                                                    >
                                                        Loading...
                                                    </span>
                                                </div>
                                            </div>
                                        ) : null) : null
                                    }

                                </div>

                                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{ background: "linear-gradient(to right, #fac90a,#ee7724,#ee7724)" }}>
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-2xl text-navbar font-bold text-center  uppercase">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm text-center tracking-wid text-navbar">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default LoginPage;
