import React from "react";
import "./NavbarMenuItem.css";

const NavbarMenuItem = (props) => {
	const itemNo = props.itemNo;
	const itemName = props.itemName;
	return (
		<div className="navbar-menu-item">
			<span className="item-no">{itemNo}</span>
			<span className="item-name">{itemName}</span>
		</div>
	);
};

export default NavbarMenuItem;
