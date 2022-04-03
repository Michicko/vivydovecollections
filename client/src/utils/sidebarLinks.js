import React from "react";
import { TiClipboard } from "react-icons/ti";
import { AiOutlineHome } from "react-icons/ai";
import { BsGrid} from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { FaBlogger } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const sidebarLinks = [
	{
		link: "dashboard",
		icon: <AiOutlineHome />,
	},
	{
		link: "orders",
		icon: <TiClipboard />,
	},
	{
		link: "products",
		icon: <BsGrid />,
	},
	{
		link: "customers",
		icon: <HiOutlineUsers />,
	},
	{
		link: "blogs",
		icon: <FaBlogger />,
	},
	{
		link: "logout",
		icon: <FiLogOut />,
	},
];

export default sidebarLinks;
