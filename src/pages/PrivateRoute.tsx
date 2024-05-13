import React from 'react';
import {useAppSelector} from "../redux/store";
import {Navigate} from "react-router-dom";
import {Path} from "./constants/path";

type PropsType = {
  children: React.ReactElement
}

export const PrivateRoute:React.FC<PropsType> = ({children}) => {

  const isLogged = useAppSelector(state => state.auth.isLogged)
  const appStatus = useAppSelector(state => state.app.appStatus)

  if(!isLogged){
    return <Navigate to={Path.AUTH} />
  }

  return (
    <>
      {children}
    </>
  );
}