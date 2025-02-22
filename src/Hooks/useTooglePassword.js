import { useState } from 'react';

const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => setShowPassword((prev) => !prev);

  return { showPassword, tooglePassword };
};

export default useTogglePassword;
