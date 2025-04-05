import { api } from "../api"

const deleteData = async (endpoint) => {
	try {
		const response = await fetch(`${api}/${endpoint}`, { method: 'DELETE' })

		const data = await response.json();

		if (!data) { throw new Error('Error realizando peticion') }

		if (data.Status === 'Error') { throw new Error(data.message) }

		return data;
	}
	catch (err) {
		alert(err.message)
	}
}

export { deleteData }

