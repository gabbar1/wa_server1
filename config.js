var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "localhost",
	    user: "wap",
	    password: "6a6GD5744TyN47Mr",
	    database: "wap",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 