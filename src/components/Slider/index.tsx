import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { CardPodcast } from '../CardPodcast';

type Podcast = { 
  img: string;
  title: string;
  followers: number;
  description: string;
  episodes?: { title: string; img: string; likes: number }[];
};

type SliderProps = {
  podcasts: Podcast[];
  interval?: number;
};

export function Slider({ podcasts, interval = 3000 }: SliderProps) {
  const limitedPodcasts = podcasts.slice(0, 10); // pega só os 10 primeiros

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % limitedPodcasts.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isHovered, limitedPodcasts.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={styles.slider}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardContainer}>
        <CardPodcast {...limitedPodcasts[currentIndex]} />
      </div>
      <div className={styles.buttons}>
        {limitedPodcasts.map((_, index) => (
          <button
            key={index}
            className={`${styles.button} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
