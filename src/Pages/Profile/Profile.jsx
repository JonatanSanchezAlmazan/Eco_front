import { useEffect } from 'react';
import UserBookingCard from '../../Components/UserBookingCard/UserBookingCard';
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import './Profile.css';
import { getUser } from '../../Reducers/Users/users.action';
import Alert from '../../Components/Alert/Alert';

import useUserState from '../../Hooks/useUserState';

const Profile = () => {
  const { state, dispatch } = useUserState();

  useEffect(() => {
    async function user() {
      getUser({ dispatch, id: state.user._id });
    }
    user();
  }, []);

  return (
    <main>
      {state.message && <Alert message={state.message} />}
      {state.error && <Alert message={state.error} />}
      <section className="profile">
        <h2>Mi Perfil</h2>
        <div>
          <UserProfileCard user={state.user} dispatch={dispatch} />
          <UserBookingCard user={state.user} />
        </div>
      </section>
    </main>
  );
};

export default Profile;
