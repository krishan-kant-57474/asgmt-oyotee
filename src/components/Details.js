import React from "react";
import ExpandableText from "../Halper/ExpandableText";
import TabComponent from "../Halper/TabComponent";

const Details = ({ items }) => {
	return (
		<div className="border-l-2  border-gray-100 px-5 h-full ">
			<div>
				<img src={items?.image} alt="" srcset="" className="h-80" />

				<div className="flex justify-between w-full">
					{items?.otherImage?.map((item) => {
						return (
							<img
								src={item}
								alt=""
								srcset=""
								className="w-10 h-10 rounded-xl"
							/>
						);
					})}
				</div>

				<div>
					<h1 className=" font-medium text-xl mt-5">{items?.name}</h1>
				</div>

				<div className="container mx-auto py-4">
					<ExpandableText text={items?.describe} />
				</div>

				<div className="container mx-auto py-4">
					<TabComponent />
				</div>
			</div>
		</div>
	);
};

export default Details;
