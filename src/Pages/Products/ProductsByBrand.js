import React from 'react';
import { useParams } from 'react-router-dom';
import ViewAllProductsBrandHook from '../../Custom/Products/viewAllProductsBrandHook';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import Pagination from '../../Utils/Pagination';

const ProductsByBrand = () => {
    const { id } = useParams()

    const [items, pagination, onPress] = ViewAllProductsBrandHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0
    return (
        <>
            <div className='container  mb-10' style={{ minHeight: '800px' }}>
                <div className='flex  justify-between items-start flex-col xs:flex-row mt-5'>
                    <ProductsContainer products={items} title="" buttonTitle="" />
                </div>
                <Pagination pageCount={pageCount} onPress={onPress} />
            </div>
        </>
    );
}

export default ProductsByBrand;
