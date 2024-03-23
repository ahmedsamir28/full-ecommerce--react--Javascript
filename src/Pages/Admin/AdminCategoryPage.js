import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminCategory from '../../Components/Admin/AdminCategory';

const AdminCategoryPage = () => {
    return (
        <div className='container my-10' style={{ height: '700px' }}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar />
                </div>
                <div className='grow'>
                    <AdminCategory />
                </div>
            </div>
        </div>
    );
}

export default AdminCategoryPage;
