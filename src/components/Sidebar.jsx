import React from "react";
import Workers from "./Workers";
import Newsletter from "./Newsletter";
import Form from "./Form";

function Sidebar(props) {
	return (
		<>
			<Workers data={props.data} />
			<Form />
			<Newsletter />
		</>
	);
}

export default Sidebar;
