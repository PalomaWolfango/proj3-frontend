import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectList from "./project-list";
import Login from './Login/loginAdmin';

function AppRoute() {

    return (
        < BrowserRouter >
            <Routes>
                <Route exact path = '/projects' element = { <ProjectList/> } />
                <Route exact path = '/login' element = { <Login/> } />
            </ Routes> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;