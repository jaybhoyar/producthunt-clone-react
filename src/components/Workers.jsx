import React from "react";
import "../styles/workers.scss";

function Workers(images) {
	return (
		<div>
			<div className="makers_container">
				<div className="makers_list">
					{images.data.map(cv => (
						<span>
							<img src={cv.img} alt="worker" />
						</span>
					))}
				</div>
				<footer>
					<p>Start working now</p>
				</footer>
			</div>
			<div className="radio_title">
				<h3>Product Hunt Radio</h3>
			</div>
			<div className="sponsered_container">
				<div className="sponsered_message">
					<span>
						How to grow and monetize communities with Jill Salzman
					</span>
				</div>
				<div className="background_image"></div>
			</div>
		</div>
	);
}
export default Workers;
