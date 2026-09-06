import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext, firefox } from "@playwright/test";
import { TakeScreenshot } from "../../utils/TakeScreenshot";
import { PageManager } from "../../support/PageManager";
import { CustomWorld } from "../../support/CustomWorld";

setDefaultTimeout(30000);

let browser: Browser;
let context: BrowserContext;

Before(async function(this: CustomWorld) {

    browser = await firefox.launch({
        headless: false
    });

    context = await browser.newContext();

    this.page = await context.newPage();

    this.pages = new PageManager(this.page);


    this.evidence = new TakeScreenshot(
    this.page,
    this.attach.bind(this)
)

});


After(async function(this: CustomWorld, Scenario) {

    if(Scenario.result?.status === Status.FAILED){
        await this.evidence.take()
    }

    await this.page?.close();

    await context?.close();

    await browser?.close();

});