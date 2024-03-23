import React, { useEffect } from 'react';
import { Dropdown, Ripple, initTE } from 'tw-elements';
const DropdownResult = ({ title, onClick }) => {
    const handler = () => { }

    const clickMe = (key) => {
        localStorage.setItem("sortType", key)
        onClick();
    }

    useEffect(() => {
        initTE({ Dropdown, Ripple });
    }, []);
    return (
        <div className='flex justify-between items-center'>
            <div className='capitalize text-zinc-700 font-semibold'> {title}</div>
            <div className="relative mt-5 " data-te-dropdown-ref>
                <button
                    className="flex text-md items-center whitespace-nowrap rounded border-none bg-zinc-100 px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-zinc-500  transition duration-150 ease-in-out hover:bg-zinc-200  "
                    type="button"
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    Sort By
                    <span className="ml-2 w-2">
                        <i class="text-zinc-700 fa-solid fa-arrow-down-short-wide"></i>
                    </span>
                </button>
                <ul
                    className="cursor-pointer absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                >
                    <li>
                        <div
                            onClick={() => clickMe("")}
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            data-te-dropdown-item-ref
                        >
                            Without order
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => clickMe("best seller")}
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            data-te-dropdown-item-ref
                        >
                            best seller
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => clickMe("Top rated")}
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            data-te-dropdown-item-ref
                        >
                            Top rated
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => clickMe("Price from low to high")}
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            data-te-dropdown-item-ref
                        >
                            Price from low to high
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => clickMe("Price from high to low")}
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            data-te-dropdown-item-ref
                        >
                            Price from high to low
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default DropdownResult;
