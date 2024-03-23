import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAddCoupon from '../../Components/Admin/AdminAddCoupon';

const AdminAddCouponPage = () => {
    return (
        <div className='container my-10'  style={{height:'800px'}}>
        <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
            <div className='mb-5'>
                <AdminSideBar />
            </div>
            <div className='grow'>
                <AdminAddCoupon />
            </div>
        </div>
    </div>
    );
}

export default AdminAddCouponPage;
