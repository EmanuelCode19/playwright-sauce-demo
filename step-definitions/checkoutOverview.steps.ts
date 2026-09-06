import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import  {LoginPage} from '../pages/LoginPage';
import { CustomWorld } from '../support/CustomWorld';

Then('se debe mostrar la pantalla de overview', async function(this:CustomWorld){
     await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await this.evidence.take()
})

