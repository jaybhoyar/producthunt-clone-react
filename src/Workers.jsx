import React from "react";
import "./workers.scss";

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
		</div>
	);
}
export default Workers;
