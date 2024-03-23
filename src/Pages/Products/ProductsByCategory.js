import React from 'react';
import { useParams } from 'react-router-dom';
import ViewAllProductsCategoryHook from '../../Custom/Products/viewAllProductsCategoryHook';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import Pagination from '../../Utils/Pagination';

const ProductsByCategory = () => {
    const { id } = useParams()

    const [items, pagination, onPress] = ViewAllProductsCategoryHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0

    return (
        <div className='contain' style={{ minHeight: '800px' }}>
            <div className='flex  justify-between items-start flex-col xs:flex-row mt-5'>
            <ProductsContainer products={items} title="" buttonTitle=""/>
            </div>
            <Pagination pageCount={pageCount} onPress={onPress}/>
        </div>
    );
}

export default ProductsByCategory;
