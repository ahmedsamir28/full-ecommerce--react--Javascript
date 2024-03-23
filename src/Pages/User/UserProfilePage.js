import React from 'react';
import UserSideBar from '../../Components/User/UserSideBar';
import UserProfile from '../../Components/User/UserProfile';

const UserProfilePage = () => {
    return (
        <div className='container my-10' style={{height:'800px'}}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <UserSideBar />
                </div>
                <div className='grow'>
                    <UserProfile />
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;
