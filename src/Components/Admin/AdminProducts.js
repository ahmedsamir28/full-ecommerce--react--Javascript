import React from 'react';
import AdminProductCard from './AdminProductCard';

const AdminProducts = ({ products }) => {
    return (
        <div className='container'>
            <div className='text-2xl font-bold text-zinc-500 mb-5 capitalize border-b-2 pb-2'>Manage all products</div>
            <div className='grid gap-y-6 ' style={{width:'1000px',gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))'}}>
                    {
                    products ? (
                        products.map((item, index) => <AdminProductCard key={index} item={item} />)
                    ) : <h4>There are no products yet</h4>
                }
            </div>
        </div>
    );
}

export default AdminProducts;
