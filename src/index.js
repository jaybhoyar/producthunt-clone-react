import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Card from "./Card";
import Workers from "./Workers";
import Newsletter from "./newsletter";
import Sponser from "./Sponser";

const products = [
	{
		name: "SelfOne",
		description: "Free template for PowerPoint, Keynote and Google Slides",
		tags: ["DESIGN TOOLS", "PRODUCTIVITY"],
		img:
			"https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "Explo",
		description: "Explore and analyze data without SQL or Excel",
		tags: ["ANALYTICS", "WEB APP"],
		img:
			"https://ph-files.imgix.net/b2d336ea-0c78-430c-8891-cad23d6e316a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "Startup 911",
		description:
			"Free list of discounts for startups. All you need for growth",
		tags: ["DESIGN TOOLS", "PRODUCTIVITY"],
		img:
			"https://ph-files.imgix.net/8753162a-ebc7-4237-8d4c-e12e142f2c63?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
	},
	{
		name: "ChartMogul Subscription Data Platform",
		description: "Work with your subscription data like never before.",
		tags: ["ANALYTICS", "SAAS"],
		img:
			"https://ph-files.imgix.net/383c5ede-49db-4a3f-8978-7ba8150907ba?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
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
const images = [
	{
		img:
			"https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/1456069/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/17305/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/1263444/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"
	},
	{
		img:
			"https://ph-avatars.imgix.net/826276/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/94353/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/166755/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2395344/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2097425/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=38&h=38&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/2096165/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	},
	{
		img:
			"https://ph-avatars.imgix.net/304202/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
	}
];
function Cards(props) {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="product_list">
					{props.data.map(product => (
						<Card {...product} />
					))}
				</div>
				<div className="side_container">
					<Workers data={images} />
					<Sponser />
					<Newsletter />
				</div>
			</div>
		</div>
	);
}
ReactDom.render(<Cards data={products} />, document.querySelector("#root"));
