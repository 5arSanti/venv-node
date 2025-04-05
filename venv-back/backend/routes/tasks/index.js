const express = require("express");

const router = express.Router();

router.post("/", (request, response) => {
	try {
		const { Titulo, Descripcion } = request.body;

		if (!Titulo || !Descripcion) {
			return response.status(400).json({ Status: "Error", message: "Faltan datos" })
		}

		if (Titulo === "") {
			return response.status(400).json({ Status: "Error", message: "El titulo no puede estar vacio" })
		}

		const query = `
            INSERT INTO Tareas (
                Titulo,
                Descripcion,
                ID_Estado_Tarea
            )
            VALUES (
                '${Titulo}',
                '${Descripcion}',
                1
            )
        `;

		sql.query(query, (err, result) => {
			if (err) { return response.status(500).json({ Status: "Error", message: err.message }) }

			return response.status(200).json({ Status: "Success", message: "Tarea creada correctamente" })
		})
	}
	catch (error) {
		console.log(error)
		return response.status(500).json({ Status: "Error", message: error.message })
	}
})

module.exports = router;

