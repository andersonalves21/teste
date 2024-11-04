const { Builder, By, until } = require('selenium-webdriver');

async function testLoginValid() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000/index.html');
        
        await driver.findElement(By.id('username')).sendKeys('usuario');
        await driver.findElement(By.id('password')).sendKeys('1234');
        await driver.findElement(By.tagName('button')).click();

        // Verifique se o redirecionamento para a página inicial ocorreu
        await driver.wait(until.urlContains('home.html'), 5000);
        let currentUrl = await driver.getCurrentUrl();
        console.log(currentUrl.includes('home.html') ? 'Teste de Login com sucesso' : 'Falha no teste de Login');
    } finally {
        await driver.quit();
    }
}

testLoginValid();
