import React from 'react';
import BrandContainer from '../../Components/Brand/BrandContainer';
import Pagination from '../../Utils/Pagination';
import AllBrandsPageHook from '../../Custom/Brands/AllBrandsPageHook';

const BrandsPage = () => {
    const [brands, loading, pageCount, getPage] = AllBrandsPageHook();

    return (
        <div className="mb-5" style={{height:'800px'}}>
            <BrandContainer data={brands.data} loading={loading} />
            {
                pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={getPage} />) : null
            }
        </div>
    );
}

export default BrandsPage;
