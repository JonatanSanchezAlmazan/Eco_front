import { useState, useEffect } from 'react';

const useImageUpload = (getValues, setValue) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedImages = getValues('images') || [];
    setImages(
      savedImages.map((file) => ({
        file,
        preview: URL.createObjectURL(file)
      }))
    );
  }, [getValues]);

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    if (images.length + files.length > 3) {
      return;
    }

    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...imagePreviews];

      setValue(
        'images',
        updatedImages.map((img) => img.file)
      );
      return updatedImages;
    });
  };

  return { images, handleImagesChange };
};

export default useImageUpload;
