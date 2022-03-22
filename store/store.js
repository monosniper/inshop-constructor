import {makeAutoObservable} from "mobx";
import UserService from "../services/UserService";

class Store {
    user = null;
    localStorage = {
        token: 'token',
        user: 'user',
        shops: 'shops',
    }
    shops = []

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this.user = user
    }

    setShops(shops) {
        this.shops = shops;
    }

    getShops() {
        console.log([...this.shops.entries()])
        return [...this.shops.entries()];
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
}

export default new Store()