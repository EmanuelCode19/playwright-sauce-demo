import { Page } from "@playwright/test";
import { ProductPages } from "../pages/ProductPages";
import { CartPage } from "../pages/CartPage";
import { LoginPage } from "../pages/LoginPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverview";

export class PageManager {
    constructor(private page: Page) {}

    private _product?: ProductPages;
    private _login?: LoginPage;
    private _cart?: CartPage
    private _checkout?: CheckoutPage
    private _checkoutOverview?: CheckoutOverviewPage

    get product(): ProductPages {
        if (!this._product) {
            this._product = new ProductPages(this.page);
        }
        return this._product;
    }

    get login(): LoginPage {
        if (!this._login) {
            this._login = new LoginPage(this.page);
        }
        return this._login;
    }

    get cart(): CartPage {
        if(!this._cart){
            this._cart = new CartPage(this.page)
        }
        return this._cart
    }

    get checkout(): CheckoutPage{
        if(!this._checkout){
            this._checkout = new CheckoutPage(this.page)
        }

        return this._checkout
    }

    get checkoutOverview(): CheckoutOverviewPage{
        if(!this._checkoutOverview){
            this._checkoutOverview = new CheckoutOverviewPage(this.page)
        }

        return this._checkoutOverview
    }
}