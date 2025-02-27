import { useEffect } from 'react';
import UserBookingCard from '../../Components/UserBookingCard/UserBookingCard';
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import './Profile.css';
import { getUser } from '../../Reducers/Users/users.action';
import Alert from '../../Components/Alert/Alert';

import useUserState from '../../Hooks/useUserState';

const Profile = () => {
  const { message, error, user, dispatch } = useUserState();
  console.log(user._id);

  useEffect(() => {
    async function user() {
      getUser({ dispatch, id: user._id });
    }
    user();
  }, []);

  return (
    <main>
      <section className="profile">
        {message && <Alert message={message} />}
        <h2>Mi Perfil</h2>
        <div>
          <UserProfileCard user={user} dispatch={dispatch} />
          <UserBookingCard user={user} />
        </div>
      </section>
    </main>
  );
};

export default Profile;
