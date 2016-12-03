
module.exports = {

	nodeServer:{
		host:'localhost',
		port:8080   //3000
	},	
	
	dbLocal: {
		mongo: {
			url: process.env.OPENSHIFT_MONGODB_DB_URL,
			database: process.env.OPENSHIFT_APP_NAME
		}
	},
 
	dbProduction: {
		mongo: {
			url: process.env.OPENSHIFT_MONGODB_DB_URL,
			database: process.env.OPENSHIFT_APP_NAME
		}
	},
	logger: {
		api: 'logs/api.log',
		exception: 'logs/exceptions.log'
	}
};
