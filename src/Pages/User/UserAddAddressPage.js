import React from 'react';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAddAddress from '../../Components/User/UserAddAddress';

const UserAddAddressPage = () => {
    return (
        <div className='container my-10' style={{height:'600px'}}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <UserSideBar />
                </div>
                <div className='grow'>
                    <UserAddAddress />
                </div>
            </div>
        </div>
    );
}

export default UserAddAddressPage;
