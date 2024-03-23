import React from 'react';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';
import ViewAddressesHook from '../../Custom/User/viewAddressesHook';

const UserAddress = () => {
    const [res] = ViewAddressesHook()

    return (
        <div>
            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Address Book</div>

            {
                res.data ? (res.data.map((item, index) => {
                    return <UserAddressCard key={index} item={item} />
                })) : <h6>No addresses yet</h6>
            }

            <div className="justify-content-center">
                <div className="flex justify-center">
                    <Link to="/user/add-address" >
                        <button className="py-3 px-4 rounded-lg capitalize font-medium bg-base hover:bg-amber-400">Add a new address</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UserAddress;
