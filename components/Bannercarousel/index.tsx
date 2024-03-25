import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Banner.module.css'

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the index, looping back to 0 if at the end
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds (adjust as needed)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className={styles.container}>
            <Image
                className={styles.heroImg}
                src={images[index]}
                alt={`Image ${index}`}
                width={300}
                height={200}
            />
        </div>
    );
};

export default ImageCarousel;
