import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Card from "./Card";
const products = [
	{
		name: "Datawaves",
		description: "Add analytics to anything",
		tags: ["ANALYTICS", "DEVELOPER TOOLS"],
		img:
			"https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "Mailbrew",
		description:
			"Automated email digests from Twitter, Reddit, YouTube & more",
		tags: ["EMAIL", "PRODUCTIVITY"],
		img:
			"https://ph-files.imgix.net/f64667ec-0201-4f20-9a03-161ab227a936?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "SpotiApp",
		description: "Export music to Spotify from any musical services",
		tags: ["IPHONE", "MUSIC"],
		img:
			"https://ph-files.imgix.net/331c9402-1670-49ea-9acf-dbffbfc6382d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "SelfOne",
		description: "Free template for PowerPoint, Keynote and Google Slides",
		tags: ["DESIGN TOOLS", "PRODUCTIVITY"],
		img:
			"https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "SaaS Landing Page",
		description:
			"The best SaaS landing page examples for design inspiration",
		tags: ["DESIGN TOOLS", "DEVELOPER TOOLS"],
		img:
			"https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "Flutter Dating",
		description: "The live Sunday dating app",
		tags: ["IPHONE", "DATING"],
		img:
			"https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	}
];
function Cards(props) {
	return (
		<div>
			<Header />
			{props.data.map(product => (
				<Card {...product} />
			))}
		</div>
	);
}
ReactDom.render(<Cards data={products} />, document.querySelector("#root"));
