const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
	return response.status(200).json({ Status: "Success", message: "GET request successful" });
})

router.post("/", (request, response) => {
	try {
		console.log("Received POST request:", request.body);
		const { name, last_name, phone, email } = request.body;

		if (!name || !last_name || !phone || !email) {
			return response.status(400).json({ Status: "Error", message: "Missing required fields" });
		}

		if (typeof name !== "string" || typeof last_name !== "string" || typeof phone !== "number" || typeof email !== "string") {
			return response.status(400).json({ Status: "Error", message: "Invalid data types" });
		}

		console.log("Received data:", request.body);
	}
	catch (error) {
		console.log(error)
		return response.status(500).json({ Status: "Error", message: error.message })
	}
})

module.exports = router;

