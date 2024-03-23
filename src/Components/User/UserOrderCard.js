import React from 'react';
import clothes from "../../Assets/Images/clothes.jpg";
import { Link } from 'react-router-dom';
const UserOrderCard = ({ item }) => {
    return (
        <div className='container mt-3'>
            <div className='flex items-center gap-7 '>
                <div className='border h-36 bg-zinc-100'>
                    <Link to={`/product/${item.product._id}`}>
                        <img className='object-cover w-full h-full' width="70px" height="70px" src={item.product.imageCover} alt="" />
                    </Link>

                </div>

                <div className='flex flex-col items-start justify-start gap-5'>
                    <h6 className='text-sm '>{item.product.title || ''}
                        <span className='ml-3 text-sm text-zinc-400'> ( {item.product.ratingsQuantity || 0} reviews )</span>
                        <span className='ml-3 font-normal text-amber-500'>{item.product.ratingsAverage ?
                            item.product.ratingsAverage : 0}</span></h6>
                    <div className='flex justify-between gap-2 flex-cols'>
                    <input
                        value={item.count}
                        type='number'
                        className='border-2 pl-2 rounded-md outline-none w-14 focus:border-amber-400' />
                        <span className='w-8 h-8 rounded-full ' style={{ backgroundColor: item.color }}></span>
                    </div>
                    
                </div>
            </div>
            <hr className='my-4' />
        </div>

    );
}

export default UserOrderCard;
