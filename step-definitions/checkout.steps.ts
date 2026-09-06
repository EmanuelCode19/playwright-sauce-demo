import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import  {LoginPage} from '../pages/LoginPage';
import { CustomWorld } from '../support/CustomWorld';

Given('el usuario se encuentra en la pantalla de checkout', async function(){
    await this.pages.checkout.verified_page_is_loaded()
})

When('toca el boton Continue', async function(){
    await this.pages.checkout.clic_btn_continue()
     await this.evidence.take()
})

When('ingresa el valor {string} en el campo First Name', async function(name: string){
    await this.pages.checkout.fillInputName(name)
     await this.evidence.take()
})

When('ingresa el valor {string} en el Last Name', async function(lastName: string){
    await this.pages.checkout.fillInputLastName(lastName)
     await this.evidence.take()
})

When('ingresa el valor {string} en el campo Postal Code', async function(postalCode: string){
    await this.pages.checkout.fillInputPostalCode(postalCode)
     await this.evidence.take()
})

Then('el sistema muestra alerta {string}', async function(alerta: string){
    let actualMessage = await this.pages.checkout.getAlertMessage()
    expect(actualMessage).toEqual(alerta)
    await this.attach(
        `
        Mensaje Obtenido: ${actualMessage}
        Mensaje Esperado: ${alerta}
        `,'text/plain'
    )
})




   
