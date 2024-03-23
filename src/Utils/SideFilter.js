import { useState } from 'react';
import SidebarSearchHook from '../Custom/search/sidebarSearchHook';

const SideFilter = () => {
    const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] = SidebarSearchHook()
    let localFrom = localStorage.getItem("priceFrom")
    let localTo = localStorage.getItem("priceTo")

    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <>
            <div className="w-80 pl-5 pt-2">
                <div
                    className="flex justify-between items-center cursor-pointer border-b-2 pb-2"
                    onClick={toggleCollapse}
                >
                    <strong >Refine Search</strong>
                    <span className={`transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`}><i class="fa-solid fa-chevron-up"></i></span>
                </div>
                <div
                    className={`transition-max-height ease-out duration-300 overflow-hidden ${!isCollapsed ? 'max-h-0' : 'max-h-screen'
                        }`}>

                    <h3 className='text-lg font-bold text-zinc-500 capitalize mt-5 mb-2  '>category</h3>
                    <div className=" flex items-center justify-start gap-2 mb-2 ">
                        <input
                            onChange={clickCategory}
                            className="h-[1.125rem] w-[1.125rem] cursor-pointer"
                            type="checkbox"
                            value="0"
                            id="checkboxDefault" />
                        <label
                            className="capitalize text-sm text-zinc-500"
                            for="">
                            all
                        </label>
                    </div>

                    {
                        category ? (category.map((item, index) => {
                            return (
                                <div key={index} className=" flex items-center justify-start gap-2 mb-2 ">
                                    <input
                                        onChange={clickCategory}
                                        value={item._id}
                                        className="h-[1.125rem] w-[1.125rem] cursor-pointer"
                                        type="checkbox"
                                        id="checkboxDefault" />
                                    <label
                                        className="capitalize text-sm text-zinc-500"
                                        for="">
                                        {item.name}
                                    </label>
                                </div>)
                        })) : <h6>There are no categories</h6>
                    }


                    <h3 className='text-lg font-bold text-zinc-500 capitalize mt-5 mb-2  '>brands</h3>
                    <div className=" flex items-center justify-start gap-2 mb-2 ">
                        <input
                            onChange={clickBrand}
                            className="h-[1.125rem] w-[1.125rem] cursor-pointer"
                            type="checkbox"
                            value="0"
                            id="checkboxDefault" />
                        <label
                            className="capitalize text-sm text-zinc-500"
                            for="">
                            all
                        </label>
                    </div>

                    {
                        brand ? (brand.map((item, index) => {
                            return (
                                <div className=" flex items-center justify-start gap-2 mb-2 ">
                                    <input
                                        onChange={clickBrand}
                                        className="h-[1.125rem] w-[1.125rem] cursor-pointer"
                                        type="checkbox"
                                        value={item._id} id="checkboxDefault" />
                                    <label
                                        className="capitalize text-sm text-zinc-500"
                                        for="">
                                        {item.name}
                                    </label>
                                </div>
                            )
                        })) : <h6>There are no brands</h6>
                    }

                    <h3 className='text-lg font-bold text-zinc-500 capitalize mt-5 mb-2  '>price</h3>
                    <div className=" flex items-center justify-start gap-2  mb-2 ">
                        <span
                            className="capitalize text-sm text-zinc-500"
                            for="">
                            from :
                        </span>
                        <input
                            value={localFrom}
                            onChange={priceFrom}
                            type="number"
                            className='border-2 rounded-md pl-2 outline-none'
                            style={{ width: "50px", height: "25px" }} />
                    </div>
                    <div className=" flex items-center justify-start gap-2 mb-2 ">
                        <span
                            className="capitalize text-sm text-zinc-500"
                            for="">
                            to :
                        </span>
                        <input
                            onChange={priceTo}
                            value={localTo}
                            type="number"
                            className='border-2 rounded-md pl-2 outline-none'
                            style={{ width: "50px", height: "25px" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideFilter;
