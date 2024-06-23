import Image from 'next/image';
import ImageSlider from '@/components/(home)/slider/ImageSlider';
import classes from '@/app/page.module.css';
import SearchBar from '@/components/(home)/seachbar/SearchBar';
import HightlighFood from '@/components/(home)/hightlight/HightlightFood';

export default function Home() {
    const slides = [
        { url: 'http://localhost:3000/image/slide/slide1.jpg', caption: 'Image 1' },
        { url: 'http://localhost:3000/image/slide/slide2.jpg', caption: 'Image 2' },
        { url: 'http://localhost:3000/image/slide/slide3.jpg', caption: 'Image 3' },
        { url: 'http://localhost:3000/image/slide/slide4.jpg', caption: 'Image 4' },
        { url: 'http://localhost:3000/image/slide/slide5.jpg', caption: 'Image 5' },
    ];

    const slideContainer = {
        width: '100%',
        height: '500px',
    };

    return (
        <main>
            <div className={classes['container']}>
                <div style={slideContainer}>
                    <ImageSlider slides={slides} />
                </div>
                <SearchBar />
                <HightlighFood />
            </div>
        </main>
    );
}
