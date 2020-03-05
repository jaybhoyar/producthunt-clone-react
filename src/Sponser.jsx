/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./sponser.scss";

function Sponser() {
	return (
		<div>
			<div className="newletter_title">
				<h3>Product Hunt Radio</h3>
			</div>
			<div className="sponsered_container">
				<div className="background_image"></div>
				<p className="img_heading">Remote teams, this is for you</p>
				<div className="signup_container">
					<span className="signup_message">
						Get the best new products in your inbox, every day 👇
					</span>
					<form>
						<input
							className="email_field"
							type="email"
							placeholder="Your email"
						/>
						<input
							className="submit_button"
							type="submit"
							value="SUBSCRIBE"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Sponser;
