import React from 'react';

const DiscountSection = () => {
    return (
        <>
            <div className="my-14 bg-[url('/src/Assets/Images/discount.jpg')]  bg-fixed h-96 "> 
            <div className='container flex flex-col py-6 sm:py-16 justify-start'>
                <h1 className=' text-white text-6xl uppercase font-light'> limited  <span className='block pt-3'> weekly deal </span> </h1>
                <span className='pt-8 text-2xl tracking-wider font-light capitalize text-white'>
                    <span className='font-bold text-3xl text-base'>30% </span>  
                    discount on all products</span>
                    <button className='capitalize text-black  block mt-4  bg-base py-2 px-3  rounded-lg w-32'> start buying </button>
            </div>
            </div>
        </>
    );
}

export default DiscountSection;
