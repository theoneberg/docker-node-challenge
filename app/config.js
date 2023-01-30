const app = {
	port: 3000
};

const db = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
};

module.exports = {
	app,
	db
}
