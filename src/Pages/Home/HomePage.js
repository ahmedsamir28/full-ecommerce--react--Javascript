import React from 'react';
import LandingPage from '../../Components/Home/LandingPage';
import HomeCategory from '../../Components/Home/HomeCategory';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import ViewHomeProductsHook from '../../Custom/Products/viewHomeProductsHook';

const HomePage = () => {
    const [items] = ViewHomeProductsHook();
    return (
        <div>
            <LandingPage/>
            <HomeCategory/>
            <ProductsContainer products={items} title="best seller" buttonTitle="more of products" pathTitle="/products" />
            <DiscountSection/>
            <ProductsContainer products={items} title="Latest fashion" buttonTitle="more of products" pathTitle="/products" />
            <BrandFeatured title="The most famous brands" buttonTitle="more of brands"/>
        </div>
    );
}

export default HomePage;
