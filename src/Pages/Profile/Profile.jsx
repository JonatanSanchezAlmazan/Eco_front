import { useContext, useEffect } from 'react';
import UserBookingCard from '../../Components/UserBookingCard/UserBookingCard';
import UserProfileCard from '../../Components/UserProfileCard/UserProfileCard';
import './Profile.css';
import { UsersContext } from '../../Providers/Users/UsersProvider';
import { getUser } from '../../Reducers/Users/users.action';

const Profile = () => {
  const { state, dispatch } = useContext(UsersContext);
  const { user, token } = state;

  useEffect(() => {
    async function user() {
      getUser({ dispatch, id: state.user._id });
    }
    user();
  }, []);

  return (
    <main>
      <section className="profile">
        <h2>Mi Perfil</h2>
        <div>
          <UserProfileCard user={user} dispatch={dispatch} token={token} />
          <UserBookingCard user={user} />
        </div>
      </section>
    </main>
  );
};

export default Profile;
