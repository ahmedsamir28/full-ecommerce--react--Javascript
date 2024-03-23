import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminBrand from '../../Components/Admin/AdminBrand';

const AdminBrandPage = () => {
    return (
        <div className='container my-10' style={{height:'700px'}}>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar />
                </div>
                <div className='grow'>
                    <AdminBrand/>
                </div>
            </div>
        </div>
    );
}

export default AdminBrandPage;
