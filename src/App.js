import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navbar/Nav";
import Shop from "./components/Shop.js";
import Plantcare from "./components/Plantcare.js";
import Workshops from "./components/Workshops.js";
import Blogs from "./components/Blogs.js";
import "./App.css";
import NotFound from "./components/NotFound.js";


function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/plantcare" element={<Plantcare />} />
					<Route path="/workshops" element={<Workshops />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
