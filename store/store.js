import {makeAutoObservable} from "mobx";
import UserService from "../services/UserService";
import ShopService from "../services/ShopService";
import {defaultOptions} from "../utils/options";

class Store {
    user = null;
    localStorage = {
        token: 'token',
        user: 'user',
        shops: 'shops',
    }
    shops = []
    activeDomain = false

    constructor() {
        makeAutoObservable(this)
    }

    getShops() {
        let shops = this.shops

        if(shops) {
            shops = [...shops.entries()].map(entry => entry[1])

            return shops
        }

        return [];
    }

    setUser(user) {
        this.user = user
    }

    setActiveDomain(id) {
        this.activeDomain = id
    }

    setShops(shops) {
        this.shops = shops;
    }

    setShopData(id, options) {
        const newShops = this.getShops()

        newShops.map(shop => {
            if(shop.id === id) shop.options = options;
        })

        this.shops = newShops;
    }

    async requestAccessToken(code) {
        const access_token = await UserService.requestAccessToken(code);

        localStorage.setItem(this.localStorage.token, access_token);

        return access_token;
    }

    async requestUser() {
        const user = await UserService.requestUser();

        localStorage.setItem(this.localStorage.user, JSON.stringify(user));
        this.setUser(user);

        return user;
    }

    async requestShops() {
        const shops = await UserService.requestShops();

        localStorage.setItem(this.localStorage.shops, JSON.stringify(shops));
        this.setShops(shops);

        return shops;
    }

    async getDomains() {
        const domains = await UserService.requestDomains();

        return domains;
    }

    async registerShop(title) {
        if(this.activeDomain) {
            let options = {...defaultOptions, title};
            console.log(options)
            const shop = await ShopService.register(this.activeDomain, options);

            this.requestShops()

            return shop;
        }
    }
}

export default new Store()