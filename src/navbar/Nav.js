import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import heart from "../image/icons8-heart-50.png";
import bag from "../image/icons8-bag-50.png";
import logo from "../image/leaf.png";

const Nav = () => {
	const location = useLocation();

	return (
		<div className="flex items-center justify-between bg-white px-4 py-2">
			<div className="text-green-600 text-lg font-bold flex align-middle items-center gap-2">
				<img
					className="w-8 h-8 p-[2px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
					src={logo}
					alt="User Avatar"
				/>
				OYOTEE
			</div>
			<nav>
				<ul className="flex justify-around space-x-4 font-medium">
					<li>
						<NavLink
							to="/"
							className={`text-gray-600 hover:text-green-600 ${
								location.pathname === "/"
									? "border-b-2 border-green-600"
									: ""
							}`}
						>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/plantcare"
							className={`text-gray-600 hover:text-green-600 ${
								location.pathname === "/plantcare"
									? "border-b-2 border-green-600"
									: ""
							}`}
						>
							Plant Care
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/workshops"
							className={`text-gray-600 hover:text-green-600 ${
								location.pathname === "/workshops"
									? "border-b-2 border-green-600"
									: ""
							}`}
						>
							Workshops
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blogs"
							className={`text-gray-600 hover:text-green-600 ${
								location.pathname === "/blogs"
									? "border-b-2 border-green-600"
									: ""
							}`}
						>
							Blogs
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="flex items-center space-x-4">
				<div className="w-5 h-5">
					<img src={bag} alt="Shopping Bag" />
				</div>
				<div className="w-5 h-5">
					<img src={heart} alt="Heart Icon" />
				</div>
				<img
					className="w-8 h-8 p-[2px] rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
					src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000&t=st=1690942885~exp=1690943485~hmac=b8f6038ce4b761f28e178e9d58ff3ab4c517a9086db488b2e87cb646f1a7df51"
					alt="User Avatar"
				/>
			</div>
		</div>
	);
};

export default Nav;
