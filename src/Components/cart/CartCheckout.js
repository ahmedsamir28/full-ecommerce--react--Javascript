import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import DeleteCartHook from '../../Custom/Cart/DeleteCartHook';
import ApplayCouponHook from '../../Custom/Cart/ApplayCouponHook';
import { ToastContainer } from 'react-toastify';

const CartCheckout = ({ totalCartPrice, cartItems, totalCartPriceAfterDiscount, couponNameRes }) => {
    const [handelDeleteCart] = DeleteCartHook()
    const [couponName, onChangeCoupon, handelSubmitCoupon, handelCheckout] = ApplayCouponHook(cartItems);

    useEffect(() => {
        if (couponNameRes) {
            onChangeCoupon(couponNameRes)
        }
    }, [couponNameRes])
    return (
        <div className='p-5 rounded-md bg-zinc-100'>
            <div className='flex items-center justify-start'>
                <input
                    value={couponName}
                    onChange={(e) => onChangeCoupon(e.target.value)}
                    type='text'
                    className='w-11/12 h-10 text-center border border-black rounded-l-md outline-none bg-zinc-100'
                    placeholder='Discount code' />
                <button onClick={handelSubmitCoupon} className='h-10 px-2 border border-black cursor-pointer bg-amber-300 hover:bg-amber-400 rounded-r-md'>application</button>
            </div>
            <div className='p-3 mt-4 text-sm text-center border-2 rounded-lg'>
                {
                    totalCartPriceAfterDiscount >= 1 ?
                        <div>
                            <span style={{ textDecorationLine: 'line-through' }}>$ {totalCartPrice} </span>
                            <span className='pl-4'> $ {totalCartPriceAfterDiscount}</span>
                        </div>
                        :
                        ` $ ${totalCartPrice}`
                }
            </div>
            <Link to="/order/paymethoud">
                <button onClick={handelCheckout} className='w-full p-3 px-2 mt-4 text-center border border-black rounded-lg bg-amber-300 hover:bg-amber-400 '>proceed to buy</button>
            </Link>
            <button onClick={handelDeleteCart} className='w-full p-3 px-2 mt-4 text-center border border-black rounded-lg bg-amber-300 hover:bg-amber-400 '>remove all cart</button>
            <ToastContainer />
        </div>
    );
}

export default CartCheckout;
