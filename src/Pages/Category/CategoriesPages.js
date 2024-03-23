import React, { useEffect } from 'react';
import CategoriesContainer from '../../Components/Category/CategoriesContainer';
import Pagination from '../../Utils/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryActions';
import AllCategoryPageHook from '../../Custom/Category/AllCategoryPageHook';

const CategoriesPages = () => {
    const [category, loading, pageCount, getPage] = AllCategoryPageHook();


    return (
        <>
            <div className="mb-5" style={{height:'800px'}}>
                <CategoriesContainer data={category.data} loading={loading} />
                {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null

                }
            </div>
        </>
    );
}

export default CategoriesPages;
