import React, { useState } from "react";

const TabComponent = () => {
	const [activeTab, setActiveTab] = useState("details");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<div className="flex border-b border-gray-300 w-full">
				<button
					className={`px-4 py-2 focus:outline-none w-1/2 ${
						activeTab === "details" ? "border-b-2 border-green-500" : ""
					}`}
					onClick={() => handleTabClick("details")}
				>
					Details
				</button>
				<button
					className={`px-4 py-2 focus:outline-none w-1/2 ${
						activeTab === "reviews" ? "border-b-2 border-green-500" : ""
					}`}
					onClick={() => handleTabClick("reviews")}
				>
					Reviews
				</button>
			</div>

			<div className="py-4">
				{activeTab === "details" && (
					<div>
						<div className="flex justify-between">
							<button className="border border-gray-500 p-2 rounded-md  text-center w-32 text-sm">
								📏 120 cm
							</button>
							<button className="border border-gray-500 p-2 rounded-md  text-center w-32 text-sm">
								🐪 Animal save
							</button>
						</div>

						<br />

						<div className="flex items-center align-middle  justify-between">
							<div className="border border-gray-500 w-10 h-10  items-center align-middle flex justify-center rounded-md  text-center bg-pink-100">
								💗
							</div>
							<button className="bg-green-700 text-white py-2 px-4 rounded-md p-5 ml-3 w-56">
								$325- Add to cart
							</button>
						</div>
					</div>
				)}
				{activeTab === "reviews" && (
					<div>
						{/* Content for the "Reviews" tab */}
						<p>Reviews Tab Content</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default TabComponent;
