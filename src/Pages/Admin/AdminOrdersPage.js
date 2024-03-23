import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminOrders from '../../Components/Admin/AdminOrders';

const AdminOrdersPage = () => {
    return (
        <div className='container my-10'  style={{height:'800px'}}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar />
                </div>
                <div className='grow'>
                    <AdminOrders />
                </div>
            </div>
        </div>
    );
}

export default AdminOrdersPage;
