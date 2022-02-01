import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectList from "./project-list";
import Login from './Login/loginAdmin';
import HomeAdmin from './Home/home-admin';
import HomePM from './Home/home-pm';
import HomeUser from './Home/home-user';

function AppRoute() {

    return (
        < BrowserRouter >
            <Routes>
                <Route exact path = '/projects' element = { <ProjectList/> } />
                <Route exact path = '/' element = { <Login/> } />
                <Route exact path = '/home-admin' element = { <HomeAdmin/> } />
                <Route exact path = '/home-pm' element = { <HomePM/> } />
                <Route exact path = '/home-user' element = { <HomeUser/> } />
            </ Routes> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;