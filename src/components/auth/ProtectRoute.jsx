import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute({children, user, redirect="/login"}) {
    if(!user)return <Navigate to={redirect}/>
    return children?children:<Outlet/>
}

export default ProtectRoute

/**
 *Navigate is used to Redirect users to another route automatically based on some condition (e.g., user authentication, specific logic).
 

 *  
 */ 

 