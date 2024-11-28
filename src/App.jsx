import React,{lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute.jsx'
// import Home from './pages/home'
const Home=lazy(()=>import("./pages/Home.jsx"))
const Login=lazy(()=>import("./pages/Login.jsx"))
const Chat=lazy(()=>import("./pages/Chat.jsx"))
const Groups=lazy(()=>import("./pages/Groups.jsx"))
const NotFound=lazy(()=>import("./pages/NotFound.jsx"))
const AdminLogin=lazy(()=>import("./pages/admin/AdminLogin.jsx"))
const Dashboard=lazy(()=>import("./pages/admin/Dashboard.jsx"))

const ChatManagement=lazy(()=>import("./pages/admin/ChatManagement.jsx"))
const UserManagement=lazy(()=>import("./pages/admin/UserManagement.jsx"))
const MessageManagement=lazy(()=>import("./pages/admin/MessageManagement.jsx"))

let user=true;

const App = () => {
  return (
   <BrowserRouter future={{
    v7_startTransition: true, 
    v7_relativeSplatPath: true,
  }}>
    {/*here is complex logic of outlook so learn it carefully*/}
    <Suspense fallback={<div>Loading.....</div>}>
    <Routes>
      <Route element={<ProtectRoute user={user} />}>
        <Route path="/chat/:chatId" element={<Chat/>}></Route>
        <Route path='/groups' element={<Groups/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Route>
      
      <Route path='/login' element={ <ProtectRoute user={!user} redirect='/'> <Login/> </ProtectRoute>}></Route>

      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>

      <Route path='/admin/users' element={<UserManagement/>}/>
      <Route path='/admin/chats' element={<ChatManagement/>}/>
      <Route path='/admin/messages' element={<MessageManagement/>}/>
      
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Suspense>
   </BrowserRouter>
  )
}

export default App







/*
>headers are to be used in home and chat only

>after login, above three routes are to be displayed




*/