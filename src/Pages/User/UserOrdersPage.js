import React from 'react';
import UserSideBar from '../../Components/User/UserSideBar';
import UserOrder from '../../Components/User/UserOrder';

const UserOrdersPage = () => {
    return (
        <div className='container my-10' >
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <UserSideBar />
                </div>
                <div className='grow'>
                    <UserOrder />
                    <div />
                </div>
            </div>
        </div>
    );
}

export default UserOrdersPage;
