import { useState } from 'react';
import './GallerySlider.css';

const GallerySlider = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  return (
    <div className="slider">
      <h6>{name || 'Ecoturismo en España'}</h6>
      <div className="slider__container">
        <img src="/icons/proximo.png" className="pre" onClick={prevSlide} width={100} height={100} />
        <img src={images[currentIndex]} alt={name} loading="lazy" width={100} height={100} />
        <img src="/icons/proximo.png" className="next" onClick={nextSlide} width={100} height={100} />
      </div>
    </div>
  );
};

export default GallerySlider;
