import { Page } from "@playwright/test";
import { CustomWorld } from '../support/CustomWorld';

export class CheckoutPage{

    private btnContinue = '#continue'
    private inputFirstName ='#first-name'
    private inputLastName = '#last-name'
    private inputPostalCode = '#postal-code'
    private titlePageCheckout = '[data-test="title"]'
    private alert = '[data-test="error"]'
    
    constructor(private page: Page){ }

     async verified_page_is_loaded(){
        await this.page.locator(this.titlePageCheckout).isVisible()
     }

     async fillInputName(name:string){
        await this.page.locator(this.inputFirstName)
        .fill(name)
     }

     async fillInputLastName(lastname: string){
        await this.page.locator(this.inputLastName)
        .fill(lastname)
     }

     async fillInputPostalCode(postalcode: string){
        await this.page.locator(this.inputPostalCode)
        .fill(postalcode)
     }

     async clic_btn_continue(){
        await this.page.locator(this.btnContinue).click()
     }

     async getAlertMessage(): Promise<string | null>{
       let message: string | null= await this.page.locator(this.alert)
        .textContent()

        return message;
     }

}