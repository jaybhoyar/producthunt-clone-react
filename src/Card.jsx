import React from "react";
import "./card.scss";

function Card(product) {
	return (
		<div className="product_container">
			<div className="image_container">
				<img src={product.img} alt={product.name} />
			</div>
			<div>
				<h3>{product.name}</h3>
				<p className="product_description">{product.description}</p>
				<span>
					{product.tags.map(tag => (
						<button>{tag}</button>
					))}
				</span>
			</div>
			<div className="votes">
				<span className="angle_up">▲</span>
				<span className="votes_count">{product.vote}</span>
			</div>
		</div>
	);
}

export default Card;
