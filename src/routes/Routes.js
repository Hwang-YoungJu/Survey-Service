import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/Auth";
import MainPage from "../pages/MainPage";


const LoggedInRoutes = () => {
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<AuthPage/>} />
    
    </Routes>
}

const AppRouter = ({isLoggedIn}) => <LoggedInRoutes/>;


export default AppRouter;