import React from 'react';
import clothes from "../../Assets/Images/clothes.jpg";
import { Link } from 'react-router-dom';

const AdminOrdersItem = ({ orderItem }) => {
    return (
        <div className='container '>
            <Link to={`/admin/orders/${orderItem._id}`}>
                <div className='flex items-end justify-between px-5 shadow-3 py-3 border-2 rounded-lg'>
                    <div className=''>
                        <span className='font-semibold text-md text-zinc-400'>Order #{orderItem.id}</span>
                        <h6 className='my-2 text-sm'>Request from <span className=' text-zinc-500'>( {orderItem.user.name || ''} )</span> </h6>
                        <h6 className='text-sm'>Email<span className=' text-zinc-500'> ( {orderItem.user.email || ''} )</span> </h6>

                        <div className="flex items-center gap-3 mt-3">
                            <div className='flex flex-col items-center px-1 py-1 border-2 rounded-lg'>
                                <div className="text-sm px-1">Delivery</div>
                                <div className="text-sm text-zinc-500">{orderItem.isDelivered === true ? 'Delivered' : 'Not delivered'}</div>
                            </div>
                            <div className='flex flex-col items-center px-1 py-1 border-2 rounded-lg'>
                                <div className="text-sm px-1"> Pay</div>
                                <div className="text-sm text-zinc-500">{orderItem.isPaid === true ? 'Paided' : 'Not made'}</div>
                            </div>

                            <div className='flex flex-col items-center px-1 py-1 border-2 rounded-lg'>
                                <div className="text-sm px-1">payment methods </div>
                                <div className="text-sm text-zinc-500">{orderItem.paymentMethodType === 'cash' ? 'Cash' : 'Credit Card'}</div>
                            </div>
                        </div>
                    </div>
                    <span>$ {orderItem.totalOrderPrice || 0}</span>
                </div>
            </Link>
        </div>
    );
}

export default AdminOrdersItem;
