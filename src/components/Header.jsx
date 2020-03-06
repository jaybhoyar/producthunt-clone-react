import React from "react";
import "../styles/header.scss";

function Header() {
	return (
		<div>
			<div className="header_contianer">
				<header className="header">
					<div className="nav">
						<div className="logo">
							<img src="../producthunt_logo.svg" alt="" />
						</div>
						<div className="search_box">
							<span>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z"
										fill="#BBB"
										fill-rule="evenodd"
									></path>
								</svg>
							</span>
							<input
								type="text"
								placeholder="Discover your next favorite thing..."
							/>
						</div>
						<ul>
							<li>Deals</li>
							<li>Jobs</li>
							<li>Makers</li>
							<li>Radio</li>
							<li>Ship</li>
							<li>...</li>
						</ul>
					</div>
					<div className="auth_button">
						<button className="login_button">Log in</button>
						<button className="signup_button">Sign up</button>
					</div>
				</header>
			</div>
			<div className="heading">
				<div className="main_heading">
					<p className="title"> Today </p>
					<span className="sub_title">Popular | Newest</span>
				</div>
				<h3>Makers working today</h3>
			</div>
		</div>
	);
}
export default Header;
