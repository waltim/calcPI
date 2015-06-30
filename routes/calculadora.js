module.exports = function(app) {
	var controller = app.controllers.calculadora;
	
	app.get('/', controller.get.index);
	app.get('/somar', controller.get.somar);
	app.get('/subtrair', controller.get.subtrair);
	//app.get('/multiplicar', controller.get.multiplicar);
	app.get('/dividir', controller.get.dividir);
    app.get('/somarGastos', controller.get.somarGastos);
	
	app.post('/calcular', controller.post.calcular);
};