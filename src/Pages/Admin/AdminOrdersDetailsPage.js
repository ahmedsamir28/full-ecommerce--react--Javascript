import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails';

const AdminOrdersDetailsPage = () => {
    return (
        <div className='container my-10'>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar />
                </div>
                <div className='grow'>
                    <AdminOrderDetails />
                </div>
            </div>
        </div>
    );
}

export default AdminOrdersDetailsPage;
