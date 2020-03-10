const mysql = require("mysql")
require("dotenv").config()

const connection = mysql.createConnection({
	database: process.env.DATABASE,
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER_DB,
	password: process.env.PASSWORD
})

const getConnection = () => {
	connection.connect(error => {
		if (error) console.error(`Error accessing database: ${error}`)
		console.log("Connected!")
	})
}

const closeConnection = () => {
	if(connection) connection.end()
}

exports.getConnection = getConnection
exports.closeConnection = closeConnection
exports.connection = connection