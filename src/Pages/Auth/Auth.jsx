import './Auth.css';
import FormAuth from '../../Components/FormAuth/FormAuth';
import useAppState from '../../Hooks/useLoadingState';
import Alert from '../../Components/Alert/Alert';
import useUserState from '../../Hooks/useUserState';

const Auth = () => {
  const { state } = useUserState();

  return (
    <main>
      {state.error && <Alert message={state.error} />}
      <section className="content">{<FormAuth />}</section>
    </main>
  );
};

export default Auth;
