var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});

		});
		
		describe('Subtrair', function() {
			it('Deveria retornar 2 quando for passado 2 e 0.', function() {
				var numero1 = 2;
				var numero2 = 0;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(2);
			});
			it('Deveria retornar 1 quando for passado 4 e 3.', function() {
				var numero1 = 4;
				var numero2 = 3;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1);
			});
			
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(400);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-400);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-400);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(400);
			});
		});
	});
	
	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'somar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
		});
		
		describe('Subtrair', function() {
		
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando dividir 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'dividir'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(400);
			});
		});
	});
	
	describe('Testa se as funções utilitárias funcionam.', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deveria retornar 1,56 quando passado 1.55555558.', function() {
				var resultado = 1.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('1,56');
			});
			
			it('Deveria retornar 0,00 quando passado undefined.', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});
    describe('SomarGastos', function() {
        it("Soma os gastos feito por uma pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;

            var resultado = controller.utils.calculos.somarGastos(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(gastoTotal);
        });
    });
    describe('SomarGastos2', function() {
        it("Soma os gastos feito por uma pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;

            var resultado = controller.utils.calculos.somarGastos2(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(gastoTotal);
        });
    });
    describe('SomarGastos3', function() {
        it("Soma os gastos feito por uma pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;

            var resultado = controller.utils.calculos.somarGastos3(numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(gastoTotal);
        });
    });
    describe('SalarioRestante', function() {
        it("Subtrair os gastos no salario da pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;
            var salario = 100;
            var novoSalario = salario - gastoTotal;

            var resultado = controller.utils.calculos.salarioRestante(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(novoSalario);
        });
    });
    describe('SalarioRestante2', function() {
        it("Subtrair os gastos no salario da pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;
            var salario = 100;
            var novoSalario = salario - gastoTotal;

            var resultado = controller.utils.calculos.salarioRestante2(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(novoSalario);
        });
    });
    describe('SalarioRestante3', function() {
        it("Subtrair os gastos no salario da pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;
            var salario = 100;
            var novoSalario = salario - gastoTotal;

            var resultado = controller.utils.calculos.salarioRestante3(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(novoSalario);
        });
    });
    describe('PorcentagemDeGastos', function() {
        it("Quantidade de gastos em porcentagem por uma pessoa", function() {
            var numero1 = 1;
            var numero2 = 4;
            var numero3 = 1;
            var numero4 = 4;
            var numero5 = 1;
            var numero6 = 4;
            var numero7 = 1;
            var numero8 = 4;
            var numero9 = 1;
            var numero10 = 4;
            var numero11 = 1;
            var numero12 = 4;
            var numero13 = 1;
            var numero14 = 4;
            var numero15 = 1;
            var numero16 = 4;
            var numero17 = 1;
            var numero18 = 4;
            var numero19 = 1;
            var numero20 = 4;
            var numero21 = 1;
            var numero22 = 4;
            var numero23 = 1;
            var numero24 = 4;
            var gastoTotal = 60;
            var salario = 100;
            var porcentagem =  (gastoTotal*100)/salario;

            var resultado = controller.utils.calculos.porcentagemDeGastos(salario,numero1,numero2,numero3,numero4,numero5,numero6,numero7,numero8,
                numero9,numero10,numero11,numero12,numero13,numero14,numero15,numero16,
                numero17,numero18,numero19,numero20,numero21,numero22,numero23,numero24);

            resultado.should.be.a.Number;
            resultado.should.be.equal(porcentagem);
        });
    });
    describe('SomarNumerosMais100', function() {
        it('Deveria retornar 105 quando for passado 1 e 4.', function() {
            var numero1 = 1;
            var numero2 = 4;

            var resultado = controller.utils.calculos.somarNumerosMais100(numero1, numero2);

            resultado.should.be.a.Number;
            resultado.should.be.equal(105);
        });
    });
});
