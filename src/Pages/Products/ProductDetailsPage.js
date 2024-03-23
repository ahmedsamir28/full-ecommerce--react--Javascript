import React from 'react';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import { useParams } from 'react-router-dom'
import ViewProductsDetailsHook from '../../Custom/Products/viewProductsDetailsHook';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, , , , prod] = ViewProductsDetailsHook(id);

    if (prod) {
        var items = prod.slice(0, 4)
    }

    if (item) {
        var rateAvg = item.ratingsAverage
        var rateQty = item.ratingsQuantity
    }

    return (
        <div className='container'>
            <CategoryHeader/>
            <div className='pb-8'>
                <ProductDetails/>
                <div className='mt-14'><RateContainer rateAvg={rateAvg} rateQty={rateQty} /></div>
                
            </div>
            <ProductsContainer products={items} title="Products you may like"/>
        </div>
    );
}

export default ProductDetailsPage;
