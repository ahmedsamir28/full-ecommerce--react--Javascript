import React from 'react';
import SubTitle from '../../Utils/SubTitle';
import clothes from "../../Assets/Images/clothes.jpg";
import mobile_1 from "../../Assets/Images/mobile1.png";
import item from "../../Assets/Images/item.png";

import ProductCard from './ProductCard';
import CardContainerHook from '../../Custom/Products/CardContainerHook';

const ProductsContainer = ({ title, buttonTitle, pathTitle, products }) => {
    const [favProd] = CardContainerHook()
    return (
        <>
            <div className='container'>
                {products ? (<SubTitle title={title} buttonTitle={buttonTitle} pathText={pathTitle} />) : null}

                <div className='grid gap-y-8 my-8 ' style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
                    {
                        products ? (
                            products.map((item, index) => <ProductCard favProd={favProd}  key={index} item={item} />)
                        ) : null
                    }
                </div>
            </div>
        </>
    );
}

export default ProductsContainer;
