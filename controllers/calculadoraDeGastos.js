module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				
				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			calculos: {
				calcular: function(parametros) {
					var numero1 = parseFloat(parametros.numero1);
					var numero2 = parseFloat(parametros.numero2);
                    var numero3 = parseFloat(parametros.numero3);
                    var numero4 = parseFloat(parametros.numero4);
                    var numero5 = parseFloat(parametros.numero5);
                    var numero6 = parseFloat(parametros.numero6);
                    var numero7 = parseFloat(parametros.numero7);
                    var numero8 = parseFloat(parametros.numero8);
                    var numero9 = parseFloat(parametros.numero9);
                    var numero10 = parseFloat(parametros.numero10);
                    var numero11 = parseFloat(parametros.numero11);
                    var numero12 = parseFloat(parametros.numero12);
                    var numero13 = parseFloat(parametros.numero13);
                    var numero14 = parseFloat(parametros.numero14);
                    var numero15 = parseFloat(parametros.numero15);
                    var numero16 = parseFloat(parametros.numero16);
                    var numero17 = parseFloat(parametros.numero17);
                    var numero18 = parseFloat(parametros.numero18);
                    var numero19 = parseFloat(parametros.numero19);
                    var numero20 = parseFloat(parametros.numero20);
                    var numero21 = parseFloat(parametros.numero21);
                    var numero22 = parseFloat(parametros.numero22);
                    var numero23 = parseFloat(parametros.numero23);
                    var numero24 = parseFloat(parametros.numero24);

					
					var resultado = Controller.utils.calculos[parametros.operacao]
                    (numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                        numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                        numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);
					
					return resultado;
				},

                somarGastos: function(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                                      numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                                      numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24)
                {
                    gastos = Number(0);
                    gastos +=numero1;
                    gastos +=numero2;
                    gastos +=numero3;
                    gastos +=numero4;
                    gastos +=numero5;
                    gastos +=numero6;
                    gastos +=numero7;
                    gastos +=numero8;
                    gastos +=numero9;
                    gastos +=numero10;
                    gastos +=numero11;
                    gastos +=numero12;
                    gastos +=numero13;
                    gastos +=numero14;
                    gastos +=numero15;
                    gastos +=numero16;
                    gastos +=numero17;
                    gastos +=numero18;
                    gastos +=numero19;
                    gastos +=numero20;
                    gastos +=numero21;
                    gastos +=numero22;
                    gastos +=numero23;
                    gastos +=numero24;
                    return gastos;
                }
			},
			
			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			extrairParametros: function(body) {
				var parametros = {
					numero1: 0.0,
                    numero2 : 0.0,
                    numero3 : 0.0,
                    numero4 : 0.0,
                    numero5 : 0.0,
                    numero6 : 0.0,
                    numero7 : 0.0,
                    numero8 : 0.0,
                    numero9 : 0.0,
                    numero10 : 0.0,
                    numero11 : 0.0,
                    numero12 : 0.0,
                    numero13 : 0.0,
                    numero14 : 0.0,
                    numero15 : 0.0,
                    numero16 : 0.0,
                    numero17 : 0.0,
                    numero18 : 0.0,
                    numero19 : 0.0,
                    numero20 : 0.0,
                    numero21 : 0.0,
                    numero22 : 0.0,
                    numero23 : 0.0,
                    numero24 : 0.0,
					operacao: body.operacao
				};
				
				parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero2 = Controller.utils.validaParametro(body.numero2);
                parametros.numero3 = Controller.utils.validaParametro(body.numero3);
                parametros.numero4 = Controller.utils.validaParametro(body.numero4);
                parametros.numero5 = Controller.utils.validaParametro(body.numero5);
                parametros.numero6 = Controller.utils.validaParametro(body.numero6);
                parametros.numero7 = Controller.utils.validaParametro(body.numero7);
                parametros.numero8 = Controller.utils.validaParametro(body.numero8);
                parametros.numero9 = Controller.utils.validaParametro(body.numero9);
                parametros.numero10 = Controller.utils.validaParametro(body.numero10);
                parametros.numero11 = Controller.utils.validaParametro(body.numero11);
                parametros.numero12 = Controller.utils.validaParametro(body.numero12);
                parametros.numero13 = Controller.utils.validaParametro(body.numero13);
                parametros.numero14 = Controller.utils.validaParametro(body.numero14);
                parametros.numero15 = Controller.utils.validaParametro(body.numero15);
                parametros.numero16 = Controller.utils.validaParametro(body.numero16);
                parametros.numero17 = Controller.utils.validaParametro(body.numero17);
                parametros.numero18 = Controller.utils.validaParametro(body.numero18);
                parametros.numero19 = Controller.utils.validaParametro(body.numero19);
                parametros.numero20 = Controller.utils.validaParametro(body.numero20);
                parametros.numero21 = Controller.utils.validaParametro(body.numero21);
                parametros.numero22 = Controller.utils.validaParametro(body.numero22);
                parametros.numero23 = Controller.utils.validaParametro(body.numero23);
                parametros.numero24 = Controller.utils.validaParametro(body.numero24);
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
            somarGastos: function(request, response) {
                response.render('somarGastos');
            }

		},
		
		post: {
			calcular: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};
