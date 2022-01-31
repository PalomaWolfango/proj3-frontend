import React from "react";
import './App.css';
import AppRoute from "./components/AppRoute";
import Menu from "./components/menu";

function App() {
	return(
		<div>
			<Menu/>  
			<AppRoute />
		</div>
	)
}

export default App;
