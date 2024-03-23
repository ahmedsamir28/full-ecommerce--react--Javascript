import React from 'react';
import UserOrderCard from './UserOrderCard';

const UserOrderItem = ({ orderItem }) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="px-5 mt-4 border-2 rounded-lg bg-zinc-50">
            <div>
                <div className="py-2 font-medium text-md text-zinc-600">Order number #{orderItem.id || 0} Done on {formatDate(orderItem.createdAt)} </div>
            </div>

            {
                orderItem.cartItems ? (orderItem.cartItems.map((item, index) => {
                    return <UserOrderCard key={index} item={item} />
                })) : null
            }
            <div className="flex items-center justify-between my-3">
                <div xs="6" className="">
                    <div className='flex items-center justify-start gap-3 text-sm '>
                        <div>
                            <div className="text-center">Delivery</div>
                            <div className="text-sm text-zinc-500">{orderItem.isDelivered === true ? 'Delivered': 'Not delivered'}</div>
                        </div>
                        <div>
                            <div className="text-center">Pay</div>
                            <div className="text-sm text-zinc-500">{orderItem.isPaid === true ? 'Paided': 'Not made'}</div>
                        </div>

                        <div>
                            <div className="">payment method</div>
                            <div className="text-sm text-center text-zinc-500">{orderItem.paymentMethodType === 'cash' ? 'Cash': 'Credit Card'}</div>
                        </div>
                    </div>
                </div>
                <div xs="6" className="flex items-center justify-content-end">
                    <div>
                        <div className="text-lg font-medium text-zinc-600">$ {orderItem.totalOrderPrice || 0}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOrderItem;
