import React from "react";
import "../styles/card.scss";

function Card(product) {
	return (
		<div className="product_container">
			<div className="image_container">
				<img src={product.thumbnail.image_url} alt={product.name} />
			</div>
			<div>
				<h3>{product.name}</h3>
				<p className="product_description">{product.tagline}</p>
				<span>
					{product.topics.map(tag => (
						<button>{tag.name}</button>
					))}
				</span>
			</div>
			<div className="votes">
				<span className="angle_up">▲</span>
				<button
					className="votes_count"
					onClick={() => product.updateCount(product.id)}
				>
					{product.votes_count}
				</button>
			</div>
		</div>
	);
}

export default Card;
