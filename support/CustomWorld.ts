import { World, IWorldOptions } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import { PageManager } from "./PageManager";
import { ProductPages } from "../pages/ProductPages";
import { TakeScreenshot } from "../utils/TakeScreenshot";


export class CustomWorld extends World {

    page!: Page;
    pages!: PageManager;
    login!: LoginPage;
    product!: ProductPages;

    evidence!: TakeScreenshot;


    constructor(options: IWorldOptions){
        super(options);
    }

}