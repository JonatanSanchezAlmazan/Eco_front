import { useContext } from 'react';
import { UsersContext } from '../Providers/Users/UsersProvider';

function useUserState(params) {
  const { state, dispatch } = useContext(UsersContext);
  const { message, error, user } = state;

  return { message, error, user, dispatch };
}

export default useUserState;
