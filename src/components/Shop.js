import React, { useState } from "react";
import star from "../image/icons8-star-48.png";
import Items from "./Items";
import Details from "./Details.js";

const Shop = () => {
	const [items, setItems] = useState({});
	return (
		<div className=" mx-10 py-8 flex border-gray-100 border-t-2 mt-5">
			<div className="w-[20%]  border-r-2  border-gray-100 ">
				<div className="mb-6">
					<p className="font-medium text-lg mb-2">Filter</p>
					<br />
					<hr />
					<p className="font-medium text-lg mb-2">Categories</p>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 checkbox" /> <p>Gardening</p>
					</div>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 checkbox" checked />{" "}
						<p>Plants</p>
					</div>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 checkbox" /> <p>Seeds</p>
					</div>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 checkbox" /> <p>Bulbs</p>
					</div>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 checkbox" /> <p>Planters</p>
					</div>
					<div className="flex items-center mb-2">
						<input type="checkbox" className="mr-2 invisible" />
						<select name="" id="" className="border rounded-md px-2 py-1">
							<option value="Others">Others</option>
						</select>
					</div>
				</div>

				<hr />

				<div className="mb-6">
					<p className="font-medium text-lg mb-2">Price range</p>
					<div className="flex   justify-between items-center p-5">
						<div className="border border-gray-500 p-2 rounded-md w-20 text-center">
							Min
						</div>
						<div className="border border-gray-500 p-2 rounded-md w-20 text-center">
							$400
						</div>
					</div>
					<button className="bg-green-700 text-white py-2 px-4 rounded-md mt-4 p-5 ml-3 w-56">
						Set price
					</button>
				</div>

				<hr />

				<div className="mb-6">
					<p className="font-medium text-lg mb-2">Rating</p>
					<div className="flex items-center">
						<input type="checkbox" className="mr-2" checked />{" "}
						<img src={star} width="8%" alt="" />
						<img src={star} width="8%" alt="" />{" "}
						<img src={star} width="8%" alt="" />
						<img src={star} width="8%" alt="" />{" "}
						<img src={star} width="8%" alt="" /> <p>above</p>
					</div>
				</div>

				<hr />
				<br />

				<div className="w-[80%] p-4 bg-green-700 rounded-md text-white">
					<h2 className="text-xl font-medium">Get 30% OFF</h2>
					<p className="mb-4 text-sm">
						Share your referral code and get a discount!
					</p>
					<button className="bg-yellow-500 text-black py-2 px-4 rounded-md w-full">
						Share
					</button>
				</div>
			</div>

			<div className="w-[55%]">
				<div className=" px-8">
					<Items setItems={setItems} />
				</div>
			</div>

			<div className="w-[25%]">
				<Details items={items} />
			</div>
		</div>
	);
};

export default Shop;
