import React from 'react';
import SubTitle from '../../Utils/SubTitle';
import BrandCard from './BrandCard';
import HomeBrandsHook from '../../Custom/Brands/HomeBrandsHook';

const BrandFeatured = ({ title, buttonTitle }) => {
    const [brands, loading] = HomeBrandsHook()
    return (
        <>
            <div className='mt-10 container'>
                <SubTitle title={title} buttonTitle={buttonTitle} pathText="brands" />
                <div className=' gap-y-10 my-10 flex justify-between items-center flex-wrap'>
                    {
                        loading === false ? (
                            brands ? (brands.data.slice(0, 4).map((item, index) => { 
                                return (<BrandCard id={item._id} key={index} image={item.image} />) })
                                ) : <h4>No brands available</h4>
                        ) : <div className='m-auto '>
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
                    }
                </div>
            </div>
        </>
    );
}

export default BrandFeatured;
