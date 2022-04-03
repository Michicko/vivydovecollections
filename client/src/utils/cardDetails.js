import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const cardsDetails = [
	{
		link: "dashboard",
		cards: [
			{
				title: "total earnings",
				number: 5000,
				icon: <RiMoneyDollarCircleLine />,
			},
			{
				title: "total orders",
				number: 300,
				icon: <RiMoneyDollarCircleLine />,
			},
			{
				title: "deliveries",
				number: 200,
				icon: <RiMoneyDollarCircleLine />,
			},
			{
				title: "failed orders",
				number: 250,
				icon: <RiMoneyDollarCircleLine />,
			},
		],
	},
	{
		link: "orders",
		cards: [
			{
				title: "pending deliveries",
				number: 500,
				icon: <RiMoneyDollarCircleLine />,
			},

			{
				title: "new deliveries",
				number: 250,
				icon: <RiMoneyDollarCircleLine />,
			},
			{
				title: "active deliveries",
				number: 350,
				icon: <RiMoneyDollarCircleLine />,
			},
			{
				title: "failed orders",
				number: 250,
				icon: <RiMoneyDollarCircleLine />,
			},
		],
	},
];

export default cardsDetails;
