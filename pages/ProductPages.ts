import { Page } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";

export class ProductPages{

    private menuBurguer = '.bm-burger-button'
    private logOutLink = '#logout_sidebar_link'
    private titleProduct = '.app_logo'
    private filterBtn = '.product_sort_container'
    private productName = (n: string) => `.inventory_item:nth-child(${n}) .inventory_item_name`
    private productPrice = (n: string) => `.inventory_item:nth-child(${n}) .inventory_item_price`;
    private imgDetail = '.inventory_details_img'
    private title = '[data-test="inventory-item-name"]'
    private price = '[data-test="inventory-item-price"]'
    private btnInventory = '.btn_inventory'
    private shoppingCartBadge ='.shopping_cart_badge'
    private cardContainer = '.inventory_item'
    private cartIcon = '[data-test="shopping-cart-link"]'
    private arrayObjectItem: object[] = []


    constructor(private page: Page){}

    async waitForLoadPage(): Promise<void>{
        let element = await this.page.waitForSelector(this.titleProduct)
        element.isVisible()
    }

    async clic_menuBuger(): Promise<void>{
        await this.page.click(this.menuBurguer)
        await this.page.waitForTimeout(500)
    }

    async clic_logOut(): Promise<void>{
        await this.page.click(this.logOutLink)
    }

    async clic_filterBtn(name:string): Promise<void>{
        await this.page.locator(this.filterBtn).selectOption({ label: name })     
    }

    async getProductName(n:string):  Promise<string>{
      await this.page.locator(this.productName(n)).waitFor()
      let name = await this.page.locator(this.productName(n)).textContent()      
      return name ?? ''
    }

    async getProductPrice(n:string): Promise<string>{
       await this.page.locator(this.productPrice(n)).waitFor()
       let price = await this.page.locator(this.productPrice(n)).textContent()
       return price ?? ''
       
    }

    async clic_optionFilter(option: string){
        await this.page.getByText(option).click()
    }

    async clic_to_producto(name: string){
        await this.page.locator('[data-test="inventory-item-name"]').filter({
            hasText: name
        }).click();
    }

    async validate_description(description: string){
        await this.page.locator('[data-test="inventory-item-desc"]').filter({
            hasText: description
        }).textContent()
    }

    async validate_detail_product(): Promise<string[]>{
       let listOfItem: string[] = []
       let srcImg: string = await this.page.locator(this.imgDetail).getAttribute('src') ?? ''
       let nameObtained: string = await this.page.locator(this.title).textContent() ?? ''
       let priceObtained: string = await this.page.locator(this.price).textContent() ?? ''
        listOfItem = [srcImg,nameObtained,priceObtained]

        return listOfItem;
    }

    async clic_to_btn(name: string){
        await this.page.locator(this.btnInventory).filter({
            hasText: name
        }).click()
    }

    async clic_to_btn_list(name: string){
        let listProduct: string[] = name.split(',')
        for(let i = 0; i < listProduct.length; i++){
          let cardContainer = await this.page.locator(this.cardContainer).filter({
            hasText: listProduct[i]
        })

        let objectClothe = {
            titulo: await cardContainer.locator('[data-test="inventory-item-name"]').textContent(),
            descripcion:await cardContainer.locator('[data-test="inventory-item-desc"]').textContent(),
            precio: await cardContainer.locator('[data-test="inventory-item-price"]').textContent()
        }

        

        this.arrayObjectItem = [...this.arrayObjectItem, objectClothe]
        await cardContainer.getByText('Add to cart').click()
        }

    }

    async validate_cart_item(value: boolean): Promise<string | any>{

        let result: string | any= ''
        if(value){
          await this.page.locator(this.shoppingCartBadge).scrollIntoViewIfNeeded()
         result = await this.page.locator(this.shoppingCartBadge).textContent() ?? ''                          
          await this.page.locator(this.shoppingCartBadge).isEnabled()
          await this.page.locator(this.shoppingCartBadge).isVisible()
        }else{
            result = this.page.locator(this.shoppingCartBadge) 
        }
                
        return result
    }

    async validate_btn(name: string){
        await this.page.getByText(name,{exact:true}).isVisible()
        await this.page.getByText(name,{exact:true}).isEnabled()
    }

    async clic_cart_icon(){
        await this.page.click(this.cartIcon)
    }

}