import React from 'react';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Utils/Pagination';
import AdminProducts from '../../Components/Admin/AdminProducts';
import ViewProductAdminHook from '../../Custom/Admin/viewProductAdminHook';

const AdminProductsPAge = () => {
    const [items, pagination,onPress] = ViewProductAdminHook();
    if (pagination)
        var pageCount = pagination;
    else
        pageCount = 0;
    return (
        <div className='container my-10'>
            <div className='flex justify-start flex-col xs:flex-row items-center xs:items-start mb-10'>
                <div className='mb-5'>
                    <AdminSideBar/>
                </div>
                <div>
                    <AdminProducts products={items} />
                </div>
            </div>
            {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />) : null
            }
        </div>
    );
}

export default AdminProductsPAge;
