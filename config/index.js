var configValues = require('./config');


module.exports = {

	getDbConnectionString: function() {

		return 'mongodb://' + configValues.uname + ":" + configValues.pwd +
		 '@ds023213.mlab.com:23213/nodetodosample'
	}
}
