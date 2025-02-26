import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await API({ method: 'GET', endpoint: 'users/verifyToken' }); // Verifica el token en el backend
        if (response.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate, location]);

  return isAuthenticated;
}

export default useAuth;
