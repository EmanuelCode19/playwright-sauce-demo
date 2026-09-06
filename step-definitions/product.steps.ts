import { Given, When, Then } from "@cucumber/cucumber";
import {  expect } from "@playwright/test";
import { ProductPages } from "../pages/ProductPages";
import { CustomWorld } from "../support/CustomWorld";

Given('el usuario ha agregado el {string} articulo al carrito', async function(name: string){
    await this.pages.product.clic_to_producto(name)
      await this.evidence.take()
    await this.pages.product.clic_to_btn('Add to cart')
        await this.evidence.take()
})


When('toca el menu burguer', async function(this: CustomWorld){
    // this.pages.product = new ProductPages(this.page);

    await this.pages.product.waitForLoadPage();
    await this.pages.product.clic_menuBuger();
    await this.evidence.take();
})

When('hace clic en el boton {string}', async function(this: CustomWorld, btnName: string){
     await this.pages.product.clic_to_btn(btnName)
})

Given('el usuario ha agregado {string} productos al carrito', async function(names: string){
    await this.pages.product.clic_to_btn_list(names)
            await this.evidence.take()

})

When('toca el icono de carrito', async function(this: CustomWorld){
     await this.pages.product.clic_cart_icon()
})


When('toca el boton Logout', async function(this: CustomWorld){
    await this.pages.product.clic_logOut()
})

When('el usuario toca el filtro y selecciona {string}', async function(name: string){
   
    await this.pages.product.clic_filterBtn(name)
})

When('selecciona {string}', async function(this: CustomWorld,option: string){
    await this.pages.product.clic_optionFilter(option)
})

When('selecciona el producto {string}', async function(this: CustomWorld,name: string){
    await this.pages.product.clic_to_producto(name)
})

When('el usuario toca el card del producto {string}', async function( name: string){
    
    await this.pages.product.clic_to_producto(name)
})

When('toca el boton {string}', async function(name: string){
        await this.evidence.take()
    await this.pages.product.clic_to_btn(name)
        await this.evidence.take()

})

When('agrega los productos {string}', async function(names: string){
    await this.pages.product.clic_to_btn_list(names)
            await this.evidence.take()

})

Then('se debe agregar al carrito y contabilizarse el articulo agregado en el icono del carrito con el valor {string}', async function(value: string){
    
    await expect(await this.pages.product.validate_cart_item(true)).toEqual(value)
})

Then('se deben contabilizar los articulos agregados en el icono del carrito con el valor {string}', async function(value: string){    
    await expect(value).toEqual(await this.pages.product.validate_cart_item(true))
            await this.evidence.take()

})
Then('se debe eliminar el producto del carrito y vizualizar que el icono del carrito resta el producto eliminado de la contabilidad de agregados',async function(){
    await expect(await this.pages.product.validate_cart_item(false)).not.toBeVisible()
    await expect(await this.pages.product.validate_cart_item(false)).toBeNull
    await this.evidence.take()
})


Then('el boton cambia al label {string}', async function(btnName: string){
    await this.pages.product.validate_btn(btnName)
})

Then('se debe mostrar la descripcion {string} del producto',async function(description: string){
    await this.pages.product.validate_description(description)
})
Then('se debe mostrar la imagen {string}, el titulo {string} y el precio {string} correspondiente al producto', async function(img: string, name: string, price: string){
    let detailtProduct = await this.pages.product.validate_detail_product()
    await expect(detailtProduct[0]).toEqual(img)
    await expect(detailtProduct[1]).toEqual(name)
    await expect(detailtProduct[2]).toContain(price)
    await this.evidence.take()
})
Then('se debe mostrar la pantalla de login', async function(this:CustomWorld){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/')
    await this.evidence.take()

})

Then('se deben filtrar los productos de acuerdo al filtro',async function(this:CustomWorld){
        await this.evidence.take()
})

Then('el primer producto dede contener el nombre {string} y precio {string}',async function(name: string, price: string){
   await expect(await this.pages.product.getProductName("1")).toEqual(name)
   await expect(await this.pages.product.getProductPrice("1")).toContain(price)
})

