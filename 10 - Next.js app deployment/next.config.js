const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				db_user: "admin",
				db_password: "admin",
				db_cluster: "cluster0",
				db_database: "db-dev"
			}
		};
	}

	return {
		env: {
			db_user: "admin",
			db_password: "admin",
			db_cluster: "cluster0",
			db_database: "db-prod"
		}
	};
};
