import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectList from "./Projects/project-list";
import Login from './Login/loginAdmin';
import HomeAdmin from './Home/home-admin';
import HomePM from './Home/home-pm';
import HomeUser from './Home/home-user';
import CreateUser from './Create/create-user';
import CreateProjectAdmin from './Create/create-project-admin';
import ProjectDetails from './Projects/project-details';
import CreateProjectPM from './Create/create-project-pm';


function AppRoute() {

    return (
        < BrowserRouter >
            <Routes>
                <Route exact path = '/projects-list' element = { <ProjectList/> } />
                <Route exact path = '/' element = { <Login/> } />
                <Route exact path = '/home-admin/:id' element = { <HomeAdmin/> } />
                <Route exact path = '/home-pm/:id' element = { <HomePM/> } />
                <Route exact path = '/home-user/:id' element = { <HomeUser/> } />
                <Route exact path = '/create-user' element = { <CreateUser/> } />
                <Route exact path = '/create-project-admin' element = { <CreateProjectAdmin/> } />
                <Route exact path = '/create-project-pm' element = { <CreateProjectPM/> } />
                <Route exact path = '/project-details' element = { <ProjectDetails/> } />
            </ Routes> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;