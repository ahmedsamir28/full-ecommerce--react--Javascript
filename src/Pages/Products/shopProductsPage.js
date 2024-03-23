import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import DropdownResult from '../../Utils/dropdownResult';
import Pagination from '../../Utils/Pagination';
import SideFilter from '../../Utils/SideFilter';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import ViewSearchProductsHook from '../../Custom/Products/viewSearchProductsHook';

const ProductsPage = () => {
    const [items, pagination, onPress,getProduct,results]= ViewSearchProductsHook();
    if (pagination)
        var pageCount = pagination;
    else
    pageCount = 0;
    return (
        <>
            <div className='container  mb-10'  >
                <CategoryHeader/>
                <DropdownResult onClick={getProduct}  title={`${results} products available now`}/>
                <div className='flex  justify-between items-start flex-col xs:flex-row mt-5'>
                <SideFilter/>
                <ProductsContainer products={items} title="" buttonTitle=""/>
                </div>
                <Pagination  pageCount={pageCount} onPress={onPress}/>
            </div>
        </>
    );
}

export default ProductsPage;
