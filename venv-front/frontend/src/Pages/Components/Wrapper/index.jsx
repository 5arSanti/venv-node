import React from "react";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";
import { InputCard } from "../InputsCards";
import { ButtonCard } from "../ButtonCard";
import { Form } from "../Form";

const Wrapper = () => {
	const [values, setValues] = React.useState({
		name: "",
		las_name: "",
		phone: "",
		email: "",
	})

	return (
		<WrapperContainer2 padding={50}>
			<SubTitle>Formulario</SubTitle>

			<Form values={values} setValues={setValues}/>
		</WrapperContainer2>
	);
}

export { Wrapper }
