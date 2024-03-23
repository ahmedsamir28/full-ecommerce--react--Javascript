import React from 'react';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';

const ProductDetails = () => {
    return (
        <div className='container mt-10 py-5  mb-5 '>
            <div className='flex justify-between flex-col lgg:flex-row gap-10 items-center'>
                <div className=' border-5 w-11/12 lgg:w-6/12  h-9/12 lgg:h-96 border-2 rounded-lg'>
                    <ProductGallery />
                </div>
                <div className='border-2 px-3   rounded-lg w-11/12'>
                    <ProductText />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
