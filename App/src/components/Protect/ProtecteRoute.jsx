import React from 'react';
import { Navigate } from 'react-router-dom';
import { Await } from "react-router-dom";
import axios from '../../utils/axios';

const ProtectedRoute = ({ element }) => {

  const makeVerify = async () => {
    const { data } = await axios.get("/auth/verify")

    localStorage.setItem("user", JSON.stringify(data))
    
    return data 
  }
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Await resolve={makeVerify()} errorElement={<Navigate to="/" />} children={element}  />
    </React.Suspense >
  )
};

export default ProtectedRoute;