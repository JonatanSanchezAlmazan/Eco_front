import './ImagesPreview.css';

const ImagesPreview = ({ images }) => {
  return (
    <div className="image__preview--container">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img.preview} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImagesPreview;
