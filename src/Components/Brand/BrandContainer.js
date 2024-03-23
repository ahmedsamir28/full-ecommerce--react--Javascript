import React from 'react';
import BrandCard from './BrandCard';

const BrandContainer = ({data,loading}) => {
    return (
        <div className='container mt-16'>
            <h1 className='capitalize text-center text-3xl border-b-2 pb-6 m-auto w-9/12'> All Brands.....</h1>
            <div className='grid gap-y-8 my-8' style={{gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))'}}>
            {
                        loading === false ? (
                            data ? (
                                data.map((item, index) => {
                                    return (<BrandCard id={item._id} key={index} image={item.image} />)
                                })
                            ) : <h4>There are no Brands</h4>
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
    );
}

export default BrandContainer;
