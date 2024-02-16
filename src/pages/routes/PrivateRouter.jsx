import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
    const {user}=useContext(AuthContext);
    if(!user)
        return <Navigate to={'/login'}></Navigate>
    
};

export default PrivateRouter;