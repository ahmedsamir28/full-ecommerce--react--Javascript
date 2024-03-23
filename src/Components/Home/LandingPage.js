import React, { useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';
import carousel_1 from '../../Assets/Images/Carousel-1.jpg'
import carousel_2 from '../../Assets/Images/Carousel-2.jpg'

const LandingPage = () => {
    useEffect(() => {
        initTE({ Carousel });
    }, []);

    return (
        <div
            id="carouselExampleSlidesOnly"
            className="relative"
            data-te-carousel-init
            data-te-ride="carousel"
        >
            {/* Carousel items */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* First item */}
                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    data-te-carousel-active
                >
                    <img
                        src={carousel_1}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                {/* Second item */}
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                >
                    <img
                        src={carousel_2}
                        className="block w-full"
                        alt="Camera"
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
