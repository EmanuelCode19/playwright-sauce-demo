import { Page } from "@playwright/test";
import { CustomWorld } from '../support/CustomWorld';

export class CartPage{

    private quantityItem: string = '[data-test="shopping-cart-badge"]'
    private cartItem: string = '.cart_item'
    private btnCheckout = '#checkout'

    constructor(private page: Page){}

    async validate_quantity_cart(): Promise<string | null>{
        let quantity: string | null = await this.page.locator(this.quantityItem).textContent()
        return quantity
    }

    async validate_lenght_cart(): Promise<number>{
        let itemLenght = await this.page.locator(this.cartItem).all()
        return itemLenght.length
    }

    async getNameProduct(n: number): Promise<string | null>{
       let listProduct = await this.page.locator(this.cartItem).all()
      return await listProduct[n]
       .locator('[data-test="inventory-item-name"]')
       .textContent()
    }

    async getDescripcionProduct(n: number): Promise<string | null>{
        let listProduct = await this.page.locator(this.cartItem).all()
       return await listProduct[n]
       .locator('[data-test="inventory-item-desc"]')
       .textContent()
    }

    async getPriceProduct(n: number): Promise<string | null>{
        let listProduct = await this.page.locator(this.cartItem).all()

       return await listProduct[n]
       .locator('[data-test="inventory-item-price"]')
       .textContent()
    }

    async clic_to_checkout(name: string){
        await this.page.locator(this.btnCheckout).click()
    }


}