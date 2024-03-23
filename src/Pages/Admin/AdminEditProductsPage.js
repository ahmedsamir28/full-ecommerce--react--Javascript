import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminEditProducts from '../../Components/Admin/AdminEditProducts';

const AdminEditProductsPage = () => {
    return (
        <div className='container my-10' style={{ height: '1100px' }}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar />
                </div>
                <div className='grow'>
                <AdminEditProducts/>
                </div>
            </div>
        </div>
    );
}

export default AdminEditProductsPage;
