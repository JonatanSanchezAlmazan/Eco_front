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
      <h4>{name || 'Ecoturismo en España'}</h4>
      <div className="slider__container">
        <img src="/icons/proximo.png" className="pre" onClick={prevSlide} />
        <img src={images[currentIndex]} alt={name} loading="lazy" />
        <img src="/icons/proximo.png" className="next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default GallerySlider;
