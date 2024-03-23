import React from 'react';
import AdminOrdersItem from './AdminOrdersItem';
import UserGetAllOrderHook from '../../Custom/User/userGetAllOrderHook';
import Pagination from '../../Utils/Pagination';


const AdminOrders = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()
    return (
        <div className='container'>
            <div className='pb-2 mb-5 text-2xl font-bold capitalize text-zinc-500'>Manage all orders</div>
            <div className='flex flex-col gap-4' >
                    
                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <AdminOrdersItem key={index} orderItem={orderItem} />
                    })) : <h6>There are no requests yet</h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }
            </div>
        </div>
    );
}

export default AdminOrders;
