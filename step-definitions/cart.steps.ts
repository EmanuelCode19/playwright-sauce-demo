import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { CustomWorld } from '../support/CustomWorld';

Given('ha tocado el boton Checkout', async function(){
    await this.pages.cart.clic_to_checkout()
})

Then('se deben mostrar los {int} articulos seleccionados', async function(quantity: number){
  let q = await this.pages.cart.validate_quantity_cart()
   let qCart = await this.pages.cart.validate_lenght_cart()

   await expect(quantity).toEqual(parseInt(q))
   await expect(quantity).toEqual(qCart)
   await this.evidence.take()
})

Then('se muestran los detalles de los {string} articulos', async function(quantity: string){
    let qCart = await this.pages.cart.validate_lenght_cart()
    await expect(parseInt(quantity)).toEqual(qCart)
    await this.evidence.take()
})


Then('los precios deben coincidir con los mostrados en la pantalla de productos', async function(){
    let arrayProduct = await this.pages.product.arrayObjectItem;
    
   for(let i = 0; i < arrayProduct.length; i++){
    let ActualPrecio = await this.pages.cart.getPriceProduct(i)
        expect(ActualPrecio).toEqual(arrayProduct[i].precio)
        await this.attach(`
        Producto #${i + 1}
        ----------------------------------------

        PRECIO

        ACTUAL:
        ${ActualPrecio}

        ESPERADO:
        ${arrayProduct[i].precio}

        ----------------------------------------
                    `, 'text/plain');
   }
})

Then('los detalles deben coincidir con los mostrados en la pantalla de productos', async function(){
    let arrayProduct = await this.pages.product.arrayObjectItem;
   for(let i = 0; i < arrayProduct.length; i++){
        let ActualTitulo = await this.pages.cart.getNameProduct(i)
        let ActualDescription =await this.pages.cart.getDescripcionProduct(i)

         expect(ActualTitulo).toEqual(arrayProduct[i].titulo)
         expect(ActualDescription).toEqual(arrayProduct[i].descripcion)
       
        await this.attach(`
        Producto #${i + 1}
        ----------------------------------------

        NOMBRE

        ACTUAL:
        ${ActualTitulo}

        ESPERADO:
        ${arrayProduct[i].titulo}

        DESCRIPCIÓN

        ACTUAL:
        ${ActualDescription}

        ESPERADO:
        ${arrayProduct[i].descripcion}

        ----------------------------------------
                    `, 'text/plain');
        }
})
