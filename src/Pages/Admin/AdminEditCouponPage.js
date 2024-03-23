import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminEditCoupon from '../../Components/Admin/AdminEditCoupon';

const AdminEditCouponPage = () => {
    return (
        <div className='container my-10'  style={{height:'800px'}}>
        <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
            <div className='mb-5'>
                <AdminSideBar />
            </div>
            <div className='grow'>
                <AdminEditCoupon/>
            </div>
        </div>
    </div>
    );
}

export default AdminEditCouponPage;
