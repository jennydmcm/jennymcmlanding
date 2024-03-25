import { useState, useRef, useEffect } from 'react';
import styles from './HorizontalCarousel.module.css';
import Image from 'next/image';

interface HorizontalCarouselProps {
    images: string[];
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ images }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += 1; // Adjust the scrolling speed as needed
            }
        }, 50); // Adjust the interval time as needed

        return () => clearInterval(intervalId);
    }, []); // Run only once on component mount

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper} ref={carouselRef}>
                <div className={styles.carousel}>
                    {images.map((image, index) => (
                        <div className={styles.imageContainer} key={index}>
                            <Image src={image} alt={`Image ${index + 1}`} width={200} height={200} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCarousel;
