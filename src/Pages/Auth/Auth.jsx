import { useLocation } from 'react-router-dom';
import './Auth.css';
import FormAuth from '../../Components/FormAuth/FormAuth';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <main>
      <section className="content">{isLogin ? <FormAuth isLogin={true} /> : <FormAuth />}</section>
    </main>
  );
};

export default Auth;
