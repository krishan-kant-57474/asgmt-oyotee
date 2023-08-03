import React, { useState } from "react";

const ExpandableText = ({ text }) => {
	const maxCharsToShow = 100;
	const [expanded, setExpanded] = useState(false);

	const handleToggleExpand = () => {
		setExpanded(!expanded);
	};

	const truncatedText = text?.slice(0, maxCharsToShow);
	const showButton = text?.length > maxCharsToShow;

	return (
		<div className="">
			<p className="text-sm text-gray-600">
				{expanded ? text : truncatedText}
				{showButton && (
					<button className=" mt-1" onClick={handleToggleExpand}>
						<div className=" font-medium text-green-600">
							{expanded ? "Show Less" : " ...Show More"}
						</div>
					</button>
				)}
			</p>
		</div>
	);
};

export default ExpandableText;
