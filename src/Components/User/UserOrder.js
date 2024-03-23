import React from 'react';
import UserOrderItem from './UserOrderItem';
import UserGetAllOrderHook from '../../Custom/User/userGetAllOrderHook';
import Pagination from '../../Utils/Pagination';

const UserOrder = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div className='container'>
            <div className="mb-5 text-2xl font-bold capitalize text-zinc-500">Number of orders #{results}</div>
            <div className=''>
                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <UserOrderItem key={index} orderItem={orderItem} />
                    })) : <h6>There are no requests yet</h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }

            </div>
        </div>
    );
}

export default UserOrder;
