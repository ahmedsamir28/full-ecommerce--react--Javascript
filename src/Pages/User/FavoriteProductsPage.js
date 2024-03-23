import React from 'react';
import UserSideBar from '../../Components/User/UserSideBar';
import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct';

const FavoriteProductsPage = () => {
    return (
        <div className='container my-10'  >
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <UserSideBar />
                </div>
                <div className=''>
                    <UserFavoriteProduct />
                </div>
            </div>
        </div>
    );
}

export default FavoriteProductsPage;
