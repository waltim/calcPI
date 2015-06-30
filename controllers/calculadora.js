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
					
					var resultado = Controller.utils.calculos[parametros.operacao](numero1, numero2);
					
					return resultado;
				},
				
				somar: function(numero1, numero2) {
					return numero2 + numero1;
				},
				
				subtrair: function(numero1, numero2) {
					return numero1-numero2;
				},
				
				multiplicar: function(numero1, numero2) {
					return numero1 * numero2;
				},
				
				dividir: function(numero1, numero2) {
					return (numero2*100) / numero1;
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
                },
                salarioRestante: function(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
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
                    Novosalario = salario - gastos;
                    return Novosalario;
                },
                porcentagemDeGastos: function(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
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
                    porcentagem = (gastos*100)/salario;
                    resuldado = porcentagem;
                    return porcentagem;
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
					numero2: 0.0,
					operacao: body.operacao
				};
				
				parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero2 = Controller.utils.validaParametro(body.numero2);
				
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			somar: function(request, response) {
				response.render('somar');
			},
			
			subtrair: function(request, response) {
				response.render('subtrair');
			},
			
			multiplicar: function(request, response) {
				response.render('multiplicar');
			},
			
			dividir: function(request, response) {
				response.render('dividir');
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
