import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectList from "./Projects/project-list";
import Login from './Login/loginAdmin';
import HomeAdmin from './Home/home-admin';
import HomePM from './Home/home-pm';
import HomeUser from './Home/home-user';
import CreateUser from './Create/create-user';
import CreateProject from './Create/create-project';
import ProjectDetails from './Projects/project-details';

function AppRoute() {

    return (
        < BrowserRouter >
            <Routes>
                <Route exact path = '/projects-list' element = { <ProjectList/> } />
                <Route exact path = '/' element = { <Login/> } />
                <Route exact path = '/home-admin' element = { <HomeAdmin/> } />
                <Route exact path = '/home-pm' element = { <HomePM/> } />
                <Route exact path = '/home-user' element = { <HomeUser/> } />
                <Route exact path = '/create-user' element = { <CreateUser/> } />
                <Route exact path = '/create-project' element = { <CreateProject/> } />
                <Route exact path = '/project-details' element = { <ProjectDetails/> } />
            </ Routes> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;