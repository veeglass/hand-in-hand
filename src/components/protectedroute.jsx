import React from 'react';
import { useMoralis } from "react-moralis";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const { user } = useMoralis();
   if (!user) {
     return <Navigate to="/" replace />;
   }
}

export default ProtectedRoute;
