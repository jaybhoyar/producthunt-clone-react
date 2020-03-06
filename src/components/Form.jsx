/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../styles/form.scss";

function Form() {
	return (
		<div>
			<div className="form_title">
				<h3>Add product</h3>
			</div>
			<div className="product_box">
				<div className="addproduct_container">
					<span className="signup_message">
						Add your product here
					</span>
					<form>
						<label htmlFor="name">Name</label>
						<input
							className="name_field"
							type="text"
							name="name"
							placeholder="Product Name..."
						/>
						<label htmlFor="name">Description</label>
						<input
							className="name_field"
							type="text"
							name="name"
							placeholder="Description..."
						/>
						<label htmlFor="name">Tags</label>
						<input
							className="name_field"
							type="text"
							name="name"
							placeholder="productivity, desgin tools"
						/>
						<label htmlFor="name">Image url</label>
						<input
							className="name_field"
							type="text"
							name="name"
							placeholder="Image url..."
						/>
						<input
							className="submit_button"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Form;
