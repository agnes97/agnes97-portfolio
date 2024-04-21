'use client';

import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useGetUserData } from '../hooks/use-get-user-data';

export type User = {
  id: string;
  email: string;
  lastLoggedIn: Date;
  createdAt: Date;
  name: string;
  avatar?: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  const {
    data: userData,
    isLoading,
    refetch,
  } = useGetUserData(accessToken || '');

  const [currentUser, setCurrentUser] = useState<User | null>(userData || null);

  useEffect(() => {
    if (userData) {
      setCurrentUser(userData);
    }
  }, [userData]);

  const handleLogin = async () => {
    await refetch().then(
      (response) => {
        setCurrentUser({ ...response.data } as User);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    await refetch().then(() => {
      setCurrentUser(null);
    });
  };

  const value = useMemo(
    () => ({
      user: currentUser,
      isLoggedIn: !!accessToken,
      isLoading,
      login: handleLogin,
      logout: handleLogout,
    }),
    [userData, currentUser, accessToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
