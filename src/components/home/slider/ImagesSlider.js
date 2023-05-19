import React, { useRef } from 'react';
import photoSlider1 from '../../../media/slider1.png';
import photoSlider2 from '../../../media/slider2.png';
import photoSlider3 from'../../../media/slider3.png';
import mainPhoto from '../../../media/photo.main.jpg';
import '../slider/Slider.scss';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function ImagesSlider() {

    const splideRef = useRef(null);

    const prevSlide = () => {
        splideRef.current.splide.go("-1");
    };

    const nextSlide = () => {
        splideRef.current.splide.go("+1");
    };

    const options = {
        type: 'loop',
        autoplay: true,
        interval: 2300,
        perPage: 3,
        gap: 10,
        pagination: false,
        arrows: false,
        pauseOnHover: false,
        rewind: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
            900: {
                gap: 10,
                perPage: 2,
            },
        },
        start: 0
    };

    return (
        <div className="slider_block">
            <main className="photo_slider">
                <h6 className="slider_title">Our gallery</h6>
                <h4 className="slider_subtitle">Photos</h4>

                <Splide options={options} ref={splideRef} className="slider">
                    <SplideSlide>
                        <img src={photoSlider1} alt="" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={photoSlider2} alt="" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={photoSlider3} alt="" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={mainPhoto} alt="" />
                    </SplideSlide>
                </Splide>

                <div className="slider_buttons">
                    <button onClick={prevSlide}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="white"/>
                        </svg>
                    </button>
                    <button onClick={nextSlide}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default ImagesSlider;