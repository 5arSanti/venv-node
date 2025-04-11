import { api } from "../../../Utils/api";
import { ButtonCard } from "../ButtonCard";
import { InputCard } from "../InputsCards";
import { WrapperContainer2 } from "../WrapperContainers";

const Form = ({ values, setValues }) => {
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${api}/tasks`, {
                method: "POST",
                mode: "cors",
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            console.log(data)

            if (response.ok) {
                alert("Form submitted successfully:", data);
            } else {
                alert(`Error submitting form: ${data.message}`);
            }
        }
        catch (error) {
            console.error("Error submitting form:", error);
        }
    }


    const handleChange = (target) => {
        const { name, value } = target;
        
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    return (
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
            <WrapperContainer2 padding={20} style={{ width: "100%" }} flexDirection="column" gap={20}>
                <InputCard
                    type="text"
                    id="name"
                    label="Nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required={true}
                    defaultValue={values.name}
                />

                <InputCard
                    type="text"
                    id="last_name"
                    label="Apellido"
                    placeholder="Apellido"
                    onChange={handleChange}
                    required={true}
                    defaultValue={values.last_name}
                />

                <InputCard
                    type="number"
                    id="phone"
                    label="Teléfono"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    required={true}
                    defaultValue={values.phone}
                />

                <InputCard
                    type="email"
                    id="email"
                    label="Email"
                    placeholder="Email"
                    onChange={handleChange}
                    required={true}
                    defaultValue={values.email}
                />

                <ButtonCard
                    id="submit"
                    type="submit"
                    label="Enviar formulario"
                >
                    Enviar formulario
                </ButtonCard>
            </WrapperContainer2>


        </form>
    );
}

export { Form }