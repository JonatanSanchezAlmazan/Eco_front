import { useState } from 'react';

const useTogglePassword = () => {
  const [showPassword, tooglePassword] = useState(false);

  const setShowPassword = () => tooglePassword((prev) => !prev);

  return { showPassword, setShowPassword };
};

export default useTogglePassword;
