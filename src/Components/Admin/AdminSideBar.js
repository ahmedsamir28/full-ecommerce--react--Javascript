import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="container" >
            <div className="flex flex-col w-80 xs:w-full rounded-lg font-medium  bg-base" style={{height:'600px'}}>
                <Link to="/admin/orders">
                    <div className=" border-b border-black  p-3 rounded-lg hover:bg-amber-400  hover:text-zinc-700">
                    Manage orders                    
                    </div>
                </Link>
                <Link to="/admin/products">
                    <div className=" border-b border-black  p-3 rounded-lg hover:bg-amber-400  hover:text-zinc-700">
                    Products manage
                    </div>
                </Link>
                <Link to="/admin/addbrand">
                    <div className="border-b border-black  p-3 rounded-lg hover:bg-amber-400 hover:text-zinc-700">
                    Add a brand
                    </div>
                </Link>

                <Link to="/admin/addcategory">
                    <div className=" border-b border-black p-3 rounded-lg hover:bg-amber-400   hover:text-zinc-700">
                    Add a category                   
                    </div>
                </Link>

                <Link to="/admin/addsubcategory">
                    <div className=" border-b border-black p-3 rounded-lg hover:bg-amber-400 hover:text-zinc-700">
                    Add a subcategory                    
                    </div>
                </Link>
                <Link to="/admin/addproduct" >
                    <div className="  border-b border-black p-3 rounded-lg hover:bg-amber-400 hover:text-zinc-700">
                    Add a product                   
                    </div>
                </Link>
                <Link to="/admin/addcoupon" >
                    <div className="  border-b border-black p-3 rounded-lg hover:bg-amber-400 hover:text-zinc-700">
                    Add coupon                    
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AdminSideBar;
