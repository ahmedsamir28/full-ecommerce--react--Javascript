import React from 'react';
import CartCheckout from '../../Components/cart/CartCheckout';
import CartItem from '../../Components/cart/CartItem';
import GetAllUserCartHook from '../../Custom/Cart/GetAllUserCartHook';

const CartPage = () => {
    const [, cartItems, totalCartPrice, couponNameRes, totalCartPriceAfterDiscount] = GetAllUserCartHook()
    return (
        <div className='container my-10' style={{ minHeight: '800px' }}>
            <div className='text-4xl font-bold capitalize'>shopping cart
            </div>
            <div className='flex flex-col justify-between gap-10 mt-10 lgg:flex-row '>
                <div className='grow'>
                    {
                        cartItems.length >= 1 ? (cartItems.map((item, index) => {
                            return (<CartItem key={index} item={item} />)
                        })) : (<h6 className='text-2xl text-center mb-5 capitalize'>Your Cart is empty.</h6>)
                    }
                    <hr/>
                </div>
                <div>
                    <CartCheckout cartItems={cartItems} couponNameRes={couponNameRes} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice} />
                </div>
            </div>
        </div>
    );
}

export default CartPage;
