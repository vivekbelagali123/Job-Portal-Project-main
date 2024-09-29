import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({Children}) =>{
    const {user} = useSelector(store=>store.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(user === null || user.role !== 'recruiter'){
            navigate("/");
        }
    },[]);
    
    return (
        <>
    {Children}
    </>
    )
}

export default ProtectedRoute;