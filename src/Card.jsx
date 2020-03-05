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
				<button
					className="votes_count"
					onClick={() => product.updateCount(product.vote)}
				>
					{product.vote}
				</button>
			</div>
		</div>
	);
}

export default Card;
