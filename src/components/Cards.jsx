import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import config from "../config.js";

// const products = [
// 	{
// 		name: "SelfOne",
// 		description: "Free template for PowerPoint, Keynote and Google Slides",
// 		tags: ["DESIGN TOOLS", "PRODUCTIVITY"],
// 		vote: 419,
// 		img:
// 			"https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "Explo",
// 		description: "Explore and analyze data without SQL or Excel",
// 		tags: ["ANALYTICS", "WEB APP"],
// 		vote: 276,
// 		img:
// 			"https://ph-files.imgix.net/b2d336ea-0c78-430c-8891-cad23d6e316a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "Startup 911",
// 		description:
// 			"Free list of discounts for startups. All you need for growth",
// 		tags: ["DESIGN TOOLS", "PRODUCTIVITY"],
// 		vote: 312,
// 		img:
// 			"https://ph-files.imgix.net/8753162a-ebc7-4237-8d4c-e12e142f2c63?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "ChartMogul",
// 		description: "Work with your subscription data like never before.",
// 		tags: ["ANALYTICS", "SAAS"],
// 		vote: 226,
// 		img:
// 			"https://ph-files.imgix.net/383c5ede-49db-4a3f-8978-7ba8150907ba?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "Mailbrew",
// 		description:
// 			"Automated email digests from Twitter, Reddit, YouTube & more",
// 		tags: ["EMAIL", "PRODUCTIVITY"],
// 		vote: 472,
// 		img:
// 			"https://ph-files.imgix.net/f64667ec-0201-4f20-9a03-161ab227a936?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "SpotiApp",
// 		description: "Export music to Spotify from any musical services",
// 		tags: ["IPHONE", "MUSIC"],
// 		vote: 354,
// 		img:
// 			"https://ph-files.imgix.net/331c9402-1670-49ea-9acf-dbffbfc6382d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},

// 	{
// 		name: "SaaS Landing Page",
// 		description:
// 			"The best SaaS landing page examples for design inspiration",
// 		tags: ["DESIGN TOOLS", "DEVELOPER TOOLS"],
// 		vote: 627,
// 		img:
// 			"https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	},
// 	{
// 		name: "Flutter Dating",
// 		description: "The live Sunday dating app",
// 		tags: ["IPHONE", "DATING"],
// 		vote: 869,
// 		img:
// 			"https://ph-files.imgix.net/2a750d4a-ab47-4b84-a124-3acd044b8ed6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
// 	}
// ];
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
class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	updateCount = id => {
		let updatedData = this.state.data.map(product => {
			if (product.id === id) {
				product.votes_count += 1;
			}
			return product;
		});
		this.setState({ data: updatedData });
	};
	componentDidMount() {
		fetch("https://api.producthunt.com/v1/posts/", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + config.token,
				Host: "api.producthunt.com"
			}
		})
			.then(res => res.json())
			.then(resData => {
				console.log(resData.posts);
				this.setState({ data: resData.posts });
			})
			.catch(err => console.log(err));
	}
	render() {
		return (
			<>
				<div className="container">
					<div className="product_list">
						{this.state.data.map(product => (
							<Card {...product} updateCount={this.updateCount} />
						))}
					</div>
					<div className="side_container">
						<Sidebar data={images} />
					</div>
				</div>
			</>
		);
	}
}
export default Cards;
