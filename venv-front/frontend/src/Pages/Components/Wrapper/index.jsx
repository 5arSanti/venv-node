import React from "react";

import "./styles.css";
import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";
import { InputCard } from "../InputsCards";
import { ButtonCard } from "../ButtonCard";
import { Form } from "../Form";
import { api } from "../../../Utils/api";

const Wrapper = () => {
	const [values, setValues] = React.useState({
		name: "",
		last_name: "",
		phone: "",
		email: "",
	})
	
	const onSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const response = await fetch(`${api}/tasks`, {
				method: "POST",
				body: JSON.stringify(values),
			})
			const data = await response.json();
			if (response.ok) {
				alert("Form submitted successfully:", data);
			} else {
				alert("Error submitting form:", data);
			}
		}
		catch (error) {
			console.error("Error submitting form:", error);
		}
	}

	return (
		<WrapperContainer2 padding={50}>
			<SubTitle>Formulario</SubTitle>

			<Form values={values} setValues={setValues} onSubmit={onSubmit}/>
		</WrapperContainer2>
	);
}

export { Wrapper }
