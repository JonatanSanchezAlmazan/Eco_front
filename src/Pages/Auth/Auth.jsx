import './Auth.css';
import FormAuth from '../../Components/FormAuth/FormAuth';
import useAppState from '../../Hooks/useLoadingState';
import Alert from '../../Components/Alert/Alert';
import useUserState from '../../Hooks/useUserState';

const Auth = () => {
  const { error, user } = useUserState();
  console.log(error);
  console.log(user);

  return (
    <main>
      {error && <Alert message={error} />}
      <section className="content">{<FormAuth />}</section>
    </main>
  );
};

export default Auth;
