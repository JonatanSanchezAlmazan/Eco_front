import { useReducer } from 'react';
import { createContext } from 'react';
import { initialUsersState, usersReducer } from '../../Reducers/Users/users.reducer';

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialUsersState);

  return <UsersContext.Provider value={{ state, dispatch }}>{children}</UsersContext.Provider>;
}
