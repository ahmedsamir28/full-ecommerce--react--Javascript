import React from 'react';
import { Link } from 'react-router-dom'

const BrandCard = ({image,id}) => {
    return (
        <>
            <div className=''>
                <div className='w-60 border-r-2 pl-5 pr-16 h-10'>
                <Link to={`/products/brand/${id}`} >
                    <img src={image} alt='' className='h-full'/>
                </Link>
                </div>
            </div>
        </>
    );
}

export default BrandCard;
