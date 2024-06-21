'use client';

import { useEffect, useState } from 'react';
import classes from './ImageSlider.module.css';

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentIndex, slides.length]);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '0px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',

        height: '100%',
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '0px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',

        height: '100%',
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotsStyles = {
        margin: '0.3px',
        fontSize: '50px',
        cursor: 'pointer',
        color: '#dfe4ea',
    };

    const dotsStylesActive = {
        margin: '0.3px',
        fontSize: '50px',
        cursor: 'pointer',
        color: '#409ac2',
    };

    const goToPrevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div style={sliderStyles}>
                <div
                    className={classes.leftArrowStyles}
                    style={leftArrowStyles}
                    onClick={goToPrevSlide}
                >
                    ⊲
                </div>
                <div
                    className={classes.rightArrowStyles}
                    style={rightArrowStyles}
                    onClick={goToNextSlide}
                >
                    ⊳
                </div>
                <div className={classes.slideStyles} style={slideStyles}></div>
                <div style={dotsContainerStyles}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            style={index === currentIndex ? dotsStylesActive : dotsStyles}
                            onClick={() => goToSlide(index)}
                        >
                            •
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
