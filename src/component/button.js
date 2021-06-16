import React from "react";

const RenderButton = ({ className, onClick, children }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default RenderButton;
