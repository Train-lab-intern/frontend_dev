import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';
import { Path } from './constants/path';

type PropsType = {
  children: React.ReactElement;
};

export default function PrivateRoute({ children }: PropsType) {
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  if (!isLogged) return <Navigate to={Path.AUTH} />;

  return children;
}
