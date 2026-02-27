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

export type AuthStatus = 'initializing' | 'loading' | 'authenticated' | 'unauthenticated';

type AuthContextType = {
  user: User | null;
  status: AuthStatus;
  error: Error | null;
  login: () => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  status: 'initializing',
  error: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
    setIsInitializing(false);
  }, []);

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useGetUserData(accessToken || '');

  const [currentUser, setCurrentUser] = useState<User | null>(userData || null);

  useEffect(() => {
    if (userData?.name && !isError) {
      setCurrentUser(userData);
    }
  }, [userData, isError]);

  const handleLogin = () => {
    setAccessToken(localStorage.getItem('accessToken'));
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
    setCurrentUser(null);
  };

  const status: AuthStatus = isInitializing
    ? 'initializing'
    : isLoading
      ? 'loading'
      : currentUser !== null && !!currentUser.name
        ? 'authenticated'
        : 'unauthenticated';

  const value = useMemo(
    () => ({
      user: currentUser,
      status,
      error,
      login: handleLogin,
      logout: handleLogout,
    }),
    [currentUser, status, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
