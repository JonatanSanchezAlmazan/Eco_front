import { useContext } from 'react';
import { UsersContext } from '../Providers/Users/UsersProvider';

function useUserState() {
  const { state, dispatch } = useContext(UsersContext);

  return { state, dispatch };
}

export default useUserState;
