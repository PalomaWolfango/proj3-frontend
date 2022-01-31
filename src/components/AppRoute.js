import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProjectList from "./project-list";

function AppRoute() {

    return (
        < BrowserRouter >
            <Routes>
                <Route exact path = '/' element = { <ProjectList/> } />
            </ Routes> 
        </ BrowserRouter>
    )
        
    
}
export default AppRoute;