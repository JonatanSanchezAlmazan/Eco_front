import { useState } from 'react';

function useImagePreview() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return { preview, handleImageChange };
}

export default useImagePreview;
