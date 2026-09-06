import { Page } from '@playwright/test';
import { CustomWorld } from '../support/CustomWorld';
export class LoginPage{

    private user = '#user-name';
    private password = '#password';
    private loginButton = '#login-button';
    private alertMsg = '.error-message-container'

    constructor(private page: Page){ }

    async open(): Promise<void>{
       await this.page.goto('https://www.saucedemo.com');
       await this.page.waitForTimeout(500)
    }

    async login(user: string, password: string): Promise<void>{

        await this.page.fill(this.user,user)
        await this.page.fill(this.password, password);
        await this.page.waitForTimeout(500)

    }

    async TapBtnLogin(): Promise<void>{
        await this.page.click(this.loginButton);
    }

    async alertMessageObtained(): Promise<string>{
        await this.page.locator(this.alertMsg).waitFor();
        const text = await this.page.locator(this.alertMsg).textContent();
        return text ?? '';
    }


}

