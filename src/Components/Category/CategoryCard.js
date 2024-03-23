import React from 'react';
import { Link } from 'react-router-dom'

const CategoryCard = ({ image, title, id }) => {
    return (
        <>
            <div className='flex items-center gap- border-r-2 py-3 pr-10 pl-10'>
                <div className='w-24 h-24 '>
                    <Link to={`/products/category/${id}`}>
                        <img alt="zcv" src={image} className="h-full " />
                    </Link>
                </div>
                <div className='flex flex-col gap-3 pl-5'>
                    <h6 className='text-md font-bold capitalize'>{title}</h6>
                    <Link to={`/products/category/${id}`}>
                        <span className='text-sm text-zinc-500 '> shop now <i class="fa-solid fa-angles-right"></i></span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;
