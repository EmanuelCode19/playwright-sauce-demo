import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import  {LoginPage} from '../pages/LoginPage';
import { CustomWorld } from '../support/CustomWorld';



Given('El usuario abre SauceDemo', async function(this: CustomWorld) {
   await this.pages.login.open()
    
    await this.evidence.take()
})

Given('el usuario ha Iniciado sesion con {string} y {string}', async function(usuario: string, password: string){
    await this.pages.login.login(usuario,password)
    await this.pages.login.TapBtnLogin()

     await this.evidence.take()
})

When('Inicia sesion con {string} y {string}', async function(usuario: string, password: string) {
    
    await this.pages.login.login(usuario,password)
     await this.evidence.take()

})

Then('debe visualizar la pagina de inventario', async function(this: CustomWorld){
    await this.pages.login.TapBtnLogin()
    await expect(this.page).toHaveURL(/inventory/)
    await this.evidence.take()

})

Then('se debe mostrar una alerta con el mensaje {string}', async function(message: string){
    await this.pages.login.TapBtnLogin()
    await expect(message).toEqual(await this.pages.login.alertMessageObtained())
   await this.evidence.take()
})