import Image from "next/image";
import styles from '../styles/Home.module.css';
import image1 from '../public/img1.svg';
import image2 from '../public/img2.svg';
import image3 from '../public/img3.svg';
import design1 from '../public/design1.png';
import design2 from '../public/design2.png';
import design3 from '../public/design3.png';
import design4 from '../public/design4.png';
import design5 from '../public/design5.png';
import design6 from '../public/design6.png';
import HorizontalCarousel from "@/components/HorizontalCarousel";
import ImageCarousel from '../components/Bannercarousel/index';

const images = [
  image1,
  image2,
  image3,
];

const designImages = [
  design1,
  design2,
  design3,
  design4,
  design5,
  design6
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroBanner}>
        <div className={styles.heroImg}>
          <ImageCarousel images={images} />
        </div>
        <h1 className={styles.title}>jenny mcmahon</h1>
        <h3 className={styles.subline}>your designer.</h3>
      </div>

      <div className={styles.introText}>
        <p className={styles.intro}>
          Hi there! I'm Jenny McMahon, a BCIT D3 graduate with a passion for creating captivating digital experiences, especially in the music industry. With my designs, I aim to enhance brand identities and engage audiences effectively. Let's collaborate to bring creativity to digital interactions in music!
        </p>
      </div>

      <div className={styles.designs}>
        <HorizontalCarousel images={designImages} />
      </div>
    </main>
  );
}
