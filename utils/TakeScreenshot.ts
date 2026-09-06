import { faker } from "@faker-js/faker"
import { Page } from "@playwright/test"

export class TakeScreenshot{

  constructor(
        private page: Page,
        private attach: any
    ) {}

   async take(): Promise<void>{
     const screenshot = await this.page.screenshot()

     await this.page.screenshot({
        path: `screenshots/${faker.string.uuid()}.png`,
        fullPage: true
     })

     await this.attach(
        screenshot,
        'image/png'
     )
   }
}

