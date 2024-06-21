import Image from 'next/image';
import ImageSlider from '@/components/slider/ImageSlider';

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
            <h1>Home Page</h1>

            <div>This is home page</div>

            <div style={slideContainer}>
                <ImageSlider slides={slides} />
            </div>
        </main>
    );
}
