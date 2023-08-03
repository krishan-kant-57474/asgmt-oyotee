import React, { useEffect, useState } from "react";
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.png";
import img11 from "../image/1.1.jpg";
import img12 from "../image/1.2.jpg";
import img13 from "../image/1.1.jpg";
import img14 from "../image/1.2.jpg";
import star from "../image/icons8-star-48.png";

const products = [
	{
		image: img3,
		name: "Monstera DK Var(L)",
		star: 4.5,
		price: 10.99,
		count: 65,
		otherImage: [img11, img12, img13, img14],
		describe:
			"Monstera deliciosa, commonly called split-leaf philodendron or swiss cheese plant, is native to Central America. It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots.",
	},

	{
		image: img2,
		name: "Monstera Deliciosa(L)",
		star: 4.5,
		price: 10.99,
		count: 6,
		otherImage: [],
		describe: "",
	},
	{
		image: img4,
		name: "Monstera Deliciosa",
		star: 4.5,
		price: 10.99,
		count: 40,
		otherImage: [],
		describe: "",
	},
	{
		image: img1,
		name: "Monstera DK Var",
		star: 4.5,
		price: 10.99,
		count: 90,
		otherImage: [],
		describe: "",
	},
	{
		image: img5,
		name: "Baby Groot Syngonium",
		star: 4.5,
		price: 10.99,
		count: 90,
		otherImage: [],
		describe: "",
	},

	// Add more products as needed
];

const Items = ({ setItems }) => {
	const [searchText, setSearchText] = useState("");
	const [itemsD, setSetItemsD] = useState(null);
	const [filteredData, setFilteredData] = useState(products);

	const handleSearch = (value) => {
		const filtered = products.filter((item) =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredData(filtered);
		setSearchText(value);
	};

	const handleClearSearch = () => {
		setFilteredData(products);
		setSearchText("");
	};

	useEffect(() => {
		setItems(products[0]);

		if (itemsD) {
			setItems(itemsD);
		}
	}, [itemsD]);

	return (
		<div className="p-4 ">
			<div className="relative">
				<input
					className="w-full py-2 pr-8 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
					type="text"
					value={searchText}
					onChange={(e) => handleSearch(e.target.value)}
					placeholder="Search for products..."
				/>
				{searchText && (
					<button
						className="absolute top-0 right-0 mt-2 mr-3 text-gray-600"
						onClick={handleClearSearch}
					>
						✕
					</button>
				)}
			</div>

			<div>
				{searchText && (
					<p className=" text-gray-400 font-medium py-2">
						{`Search result for "${searchText}"`}{" "}
					</p>
				)}
			</div>
			<div className="flex gap-6 mt-5">
				<div className="px-2 py-1 rounded-lg font-medium text-gray-400 text-sm">
					Sort
				</div>
				<div
					className="px-2 py-1 rounded-lg font-medium text-gray-100 text-sm bg-[#1cb33a]"
					style={{ border: "1px solid lightgray" }}
				>
					Relevance
				</div>
				<div
					className="px-2 py-1 rounded-lg font-medium text-gray-400 text-sm"
					style={{ border: "1px solid lightgray" }}
				>
					Popular
				</div>
				<div
					className="px-2 py-1 rounded-lg font-medium text-gray-400 text-sm"
					style={{ border: "1px solid lightgray" }}
				>
					Most New
				</div>
				<div className=" text-gray-400">
					<input type="checkbox" className=" invisible" />
					<select name="" id="" className="border rounded-md px-2 py-1">
						<option value="Others" className="text-gray-400">
							Price
						</option>
					</select>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-10 mt-4">
				{filteredData.map((item, index) => (
					<div
						className="flex flex-col items-center rounded-lg shadow-lg bg-white p-2 py-6 w-[100%]"
						key={index}
						style={{ border: "1px solid lightgray" }}
						onClick={() => {
							setSetItemsD(item);
						}}
					>
						<img
							className="w-32 h-48 object-contain"
							alt={item.name}
							src={item.image}
						/>
						<div>
							<p className="mt-2 text-lg font-semibold">{item.name}</p>

							<div className="flex items-center">
								<img src={star} width="8%" alt="" />
								<img src={star} width="8%" alt="" />
								<img src={star} width="8%" alt="" />
								<img src={star} width="8%" alt="" />
								<span>{`(${item.count})`}</span>
							</div>

							<div className="flex  justify-between">
								<div className=" text-sm">
									<span>Price</span>
									<p className="text-gray-600 font-medium">{`$${item.price}`}</p>
								</div>

								<div>
									<button
										style={{ border: "1px solid lightgray" }}
										className="px-2 py-1 rounded-lg"
									>
										Add to cart
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Items;
