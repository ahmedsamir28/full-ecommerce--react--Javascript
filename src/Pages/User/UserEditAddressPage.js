import React from 'react';
import UserSideBar from '../../Components/User/UserSideBar';
import UserEditAddress from '../../Components/User/UserEditAddress';

const UserEditAddressPage = () => {
    return (
        <div className='container my-10' style={{height:'800px'}}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <UserSideBar />
                </div>
                <div className='grow'>
                    <UserEditAddress />
                </div>
            </div>
        </div>
    );
}

export default UserEditAddressPage;
