import { api } from "../api"

const postData = async (endpoint, values) => {
	try {
		const response = await fetch(`${api}/${endpoint}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
                'Accept': 'application/json',
			},
			body: JSON.stringify(values),
		 })

		const data = await response.json();

		if (!data) { throw new Error('Error realizando peticion') }

		if (data.Status === 'Error') { throw new Error(data.message) }

		return data;
	}
	catch (err) {
		alert(err.message)
		return null;
	}
}

export { postData }

