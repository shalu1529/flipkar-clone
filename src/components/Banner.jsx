import React from 'react';
import { bannerData } from '../data';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Banner = () => {
    return (
        <div className="z-0 mt-4"> 
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map(image => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt="banner"
                        className="w-full h-[320px] sm:h-[220px] object-cover"
                    />
                ))
            }
        </Carousel>
        </div>
    )
}

export default Banner;
