import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Loading from '../../Components/Loading/Loading'
// import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    // const location = useLocation()

    if(isAdminLoading) {
        <Loading />
    }
    if(user && isAdmin){
        return children;
    }
    // if(!user || !isAdmin){
    //     return <Navigate to='/' state={{from: location}} replace></Navigate>
    // }
    
};

export default AdminRoute;