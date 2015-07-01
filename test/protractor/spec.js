describe('Protractor', function() {

    it('deve retornar 200,00 quando for passado os valores 100 e 100.', function() {
        browser.driver.get('http://localhost:3000/somar');
        browser.driver.findElement(by.id('numero1')).sendKeys(100);
        browser.driver.findElement(by.id('numero2')).sendKeys(100);
        browser.driver.findElement(by.id('Calcular')).click();

        expect(browser.driver.findElement(by.id('resultado')).getText()).toEqual('O resultado é 200,00.');
    });

    it('deve retornar 800,00 quando for passado o valor 200', function() {
        browser.driver.get('http://localhost:3000/subtrair');
        browser.driver.findElement(by.id('numero1')).sendKeys(1000);
        browser.driver.findElement(by.id('numero2')).sendKeys(200);
        browser.driver.findElement(by.id('Calcular')).click();

        expect(browser.driver.findElement(by.id('resultado')).getText()).toEqual('O resultado é 800,00.');
    });

    it('deve retornar 30,00 quando for passado 300', function() {
        browser.driver.get('http://localhost:3000/dividir');
        browser.driver.findElement(by.id('numero1')).sendKeys(1000);
        browser.driver.findElement(by.id('numero2')).sendKeys(300);
        browser.driver.findElement(by.id('Calcular')).click();
        expect(browser.driver.findElement(by.id('resultado')).getText()).toEqual('O resultado é 30,00.');
    });
});