var Todos = require('../models/toDoModel');

module.exports = function(app){

	app.get('/api/setupTodos', function(req,res){

		//seed database

		var starterTodos = [{

			username:'test',
			todo: 'Buy milk',
			isDone: false,
			hasAttachment: false
		}, 
		{
			username:'test',
			todo: 'feed dog',
			isDone:false,
			hasAttachment: false
		},
		{
			username:'test',
			todo: 'Learn Node',
			isDone:false,
			hasAttachment: false
		}


		];

		//set Todos to model from toDoModel.js , then pass the array of seed data to initiate.
		//response should be JSON result
		Todos.create(starterTodos, function(err, result){

			res.send(result);

		});

	});
}