import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useParams } from 'react-router-dom';

import RightButton from './RightButton';
import LeftButton from './LeftButton';
import ViewProductsDetailsHook from '../../Custom/Products/viewProductsDetailsHook';

const ProductGallery = () => {
    const { id } = useParams();
    const [item, images, cat, brand] = ViewProductsDetailsHook(id );
    
    return (
        <div className="py-6 px-3  ">
            <ImageGallery items={images} 
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    );
}

export default ProductGallery;
