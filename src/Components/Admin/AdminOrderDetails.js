import React from 'react';
import CartItem from '../cart/CartItem';
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import GetOrderDetailsHook from '../../Custom/Admin/getOrderDetailsHook';
import ChangeOrderStatusHook from '../../Custom/Admin/changeOrderStatusHook';
import UserOrderItem from '../User/UserOrderItem';

const AdminOrderDetails = () => {
    const { id } = useParams()
    const [orderData,] = GetOrderDetailsHook(id)
    const [formatDate, onChangePaid, changePayOrder, onChangeDeliver, changeDeliverOrder] = ChangeOrderStatusHook(id)

    return (
        <div>
            <div className='text-2xl font-bold text-zinc-500 mb-5 capitalize'>Details of order number #55</div>

            <div className=''>
                <UserOrderItem orderItem={orderData} />
            </div>

            <div className='bg-zinc-50 mt-4 border-2 rounded-lg shadow-3 pb-10'>
                <div className='flex justify-start flex-col gap-3 bg-zinc-50 p-5 rounded-lg'>
                    <div className="text-2xl font-bold text-zinc-600  capitalize ">Client details</div>
                    <h3 className='text-lg font-medium capitalize'>
                        name : <span className='text-sm  text-zinc-500'>
                            {orderData ? orderData.user ? orderData.user.name : '' : ''}
                        </span>
                    </h3>
                    <div className='capitalize font-medium'>
                        phone Number : <span className='text-zinc-500'>
                            {orderData ? orderData.user ? orderData.user.phone : '' : ''}
                        </span>
                    </div>
                    <div className='capitalize font-medium'>
                        Email : <span className='lowercase text-zinc-500'>
                            {orderData ? orderData.user ? orderData.user.email : '' : ''}
                        </span>
                    </div>
                </div>

                <div className='py-2 border-y-2 flex justify-center gap-4 items-center mt-5'>

                    <div className='flex justify-between gap-2 items-center'>
                        <select
                            name="pay"
                            id="paid"
                            onChange={onChangePaid}
                            className="cursor-pointer text-zinc-400 text-center capitalize border-2 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        >
                            <option value="0">Pay</option>
                            <option value="true">Done</option>
                            <option value="false">not done</option>

                        </select>
                        <button onClick={changePayOrder} className="py-2  px-3 rounded-lg  font-medium bg-base hover:bg-amber-400">
                            Save
                        </button>
                    </div>

                    <div className='flex justify-between gap-2 items-center'>
                        <select
                            onChange={onChangeDeliver}
                            name="deliver"
                            id="deliver"
                            className="cursor-pointer text-zinc-400 text-center capitalize border-2 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        >
                            <option value="0">Delivery</option>
                            <option value="true">Done</option>
                            <option value="false">not done</option>
                        </select>
                        <button onClick={changeDeliverOrder} className="py-2  px-3 rounded-lg  font-medium bg-base hover:bg-amber-400">
                            Save
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AdminOrderDetails;
