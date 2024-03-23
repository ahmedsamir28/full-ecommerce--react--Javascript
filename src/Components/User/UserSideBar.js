import React from 'react';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        <div className="container">
            <div className="flex flex-col w-80 xs:w-full rounded-lg font-medium  bg-base" style={{height:'600px'}}>
                <Link to="/user/allorders">
                    <div className=" border-b border-black  p-3 rounded-lg hover:bg-amber-400  hover:text-zinc-700">
                    Manage orders                    
                    </div>
                </Link>
                <Link to="/user/favoriteproducts">
                    <div className=" border-b border-black  p-3 rounded-lg hover:bg-amber-400  hover:text-zinc-700">
                    Favorite products
                    </div>
                </Link>
                <Link to="/user/addresses">
                    <div className="border-b border-black  p-3 rounded-lg hover:bg-amber-400 hover:text-zinc-700">
                    Personal addresses
                    </div>
                </Link>

                <Link to="/user/profile">
                    <div className=" border-b border-black p-3 rounded-lg hover:bg-amber-400   hover:text-zinc-700">
                    Personal profile                 
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default UserSideBar;
