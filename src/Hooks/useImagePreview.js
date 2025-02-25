import { useState } from 'react';

function useImagePreview() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const file = event.target.files[0];
    if (selectedFile) {
      setPreview(URL.createObjectURL(file));
      setFile(file);
    }
  };

  return { preview, file, handleImageChange };
}

export default useImagePreview;
