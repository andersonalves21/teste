const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Testes do Sistema Web', function() {
    this.timeout(30000); // Configura o tempo limite para 30 segundos

    let driver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async () => {
        await driver.quit();
    });

    it('Deve fazer login com credenciais válidas', async () => {
        await driver.get('http://localhost:3000/index.html');
        await driver.findElement(By.id('username')).sendKeys('usuario');
        await driver.findElement(By.id('password')).sendKeys('1234');
        await driver.findElement(By.tagName('button')).click();
        await driver.wait(until.urlContains('home.html'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        assert.ok(currentUrl.includes('home.html'), 'Falha no login');
    });

    // Adicione os demais testes aqui, usando a mesma estrutura `it`
});
