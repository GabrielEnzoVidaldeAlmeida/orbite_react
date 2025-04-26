import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface SliderProps {
  images: string[];
  interval?: number; // tempo em ms para trocar de imagem automaticamente
}

const Slider: React.FC<SliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // limpar intervalo ao desmontar
  }, [images.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />
      <div className={styles.buttons}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.button} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
