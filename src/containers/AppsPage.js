import React from "react";
import AppList from "../components/AppList";
import image from "../images/paint_template.jpg";

const list = [
	{
		name: "The Paint Game",
		image: image,
		description: "Simple paint game to practice control",
		link: "https://thepaintgame.herokuapp.com/",
	},
	{
		name: "The Paint Game",
		image: image,
		description: "Simple paint game to practice control",
		link: "https://thepaintgame.herokuapp.com/",
	},
	{
		name: "The Paint Game",
		image: image,
		description: "Simple paint game to practice control",
		link: "https://thepaintgame.herokuapp.com/",
	},
	{
		name: "The Paint Game",
		image: image,
		description: "Simple paint game to practice control",
		link: "https://thepaintgame.herokuapp.com/",
	},
];

const AppsPage = () => {
	return <AppList list={list}></AppList>;
};

export default AppsPage;
