import React from 'react';
import { Link } from 'react-router-dom';
import ProductCardHook from '../../Custom/Products/ProductCardHook';
import { ToastContainer } from 'react-toastify';

const ProductCard = ({ item, favProd }) => {
    const [removeToWishListData, addToWishListData, handelFav, favImg] = ProductCardHook(item, favProd)

    return (
        <div className='container '>
            <div className='border-2 h-96   px-1 py-2 shadow-md rounded-xl'>
                <div className='relative h-72  '>
                    <Link to={`/product/${item._id}`}>
                        <img src={item.imageCover} className='hover:scale-110 hover:rotate-2 h-full duration-300 w-full cursor-pointer' alt='' />
                    </Link>
                    <span className='absolute top-2 right-3 cursor-pointer text-xl'>
                        <img
                            src={favImg}
                            alt=''
                            onClick={handelFav}
                            className='text-center'
                            style={{
                                height: "24px",
                                width: "26px",
                                cursor: 'pointer'
                            }}
                        />
                    </span>

                </div>

                <h4 className='pl-5 mt-5 text-zinc-500 capitalize font-semibold text-sm'>{item.title}</h4>
                <div className='pl-5 my-2 flex items-center justify-between'>
                    <span className='text-sm'>$ {item.priceAfterDiscount >= 1 ?
                                        (<div><span style={{ textDecorationLine: 'line-through' }}>{item.price}</span> {item.priceAfterDiscount}</div>)
                                        : item.price}</span>
                    <span className='mr-5 text-md cursor-pointer'>
                        {item.ratingsAverage || 0} <i class="text-base ml-2 fa-solid fa-star"></i>
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ProductCard;
