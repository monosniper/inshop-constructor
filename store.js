import {makeAutoObservable} from "mobx";
import {$api, $server} from "./http";

class Store {
    stepsCount = 1;
    currentStep = 1;
    user = null;
    styles = [
        {
            title: 'Шапка',
            items: [
                {
                    name: 'logo',
                    title: 'Логотип'
                },
                {
                    name: 'title',
                    title: 'Название'
                },
                {
                    name: 'subtitle',
                    title: 'Слоган'
                },
                {
                    name: 'avatar',
                    title: 'Аватарка'
                },
                {
                    name: 'full-name',
                    title: 'Полное имя'
                },
            ]
        },
        {
            title: 'Категории',
            items: [
                {
                    name: 'icons',
                    title: 'Иконки'
                },
            ]
        },
        {
            title: 'Карточка товара',
            items: [
                {
                    name: 'blackout',
                    title: 'Затемнение'
                },
            ]
        },
        {
            title: 'Пагинация',
            items: [
                {
                    name: 'border-radius',
                    title: 'Округленные кнопки'
                },
                {
                    name: 'end-button',
                    title: 'Кнопка “в конец”'
                },
            ]
        },
    ]
    shop = {
        id: null,
        data: {},
        styles: []
    }

    constructor() {
        this.shop.styles = this.processStyles()

        makeAutoObservable(this)
    }

    processStyles() {
        let allItems = []
        let styles = {}

        this.styles.forEach(group => {
            allItems = [...allItems, ...group.items]
        })

        allItems.forEach(item => {
            styles[item.name] = true
        });

        return styles;
    }

    getModules() {
        let modules = this.shop.modules

        if(modules) {
            modules = [...modules.entries()].map(entry => entry[1])

            return modules
        }

        return [];
    }

    hasModule(name) {
        return  this.getModules().indexOf(name) !== -1;
    }

    setStyle(name, state) {
        this.shop.styles[name] = state
    }

    getPalette() {
        let storePalette = this.shop.data.palette

        if(storePalette) {
            storePalette = [...storePalette.entries()].map(entry => entry[1])

            return storePalette
        }

        return [];
    }

    isOwnPalette() {
        return this.isPalette(this.shop.data.ownPalette, this.shop.data.palette)
    }

    setStepsCount(stepsCount) {
        this.stepsCount = stepsCount
    }

    setUser(user) {
        this.user = user
    }

    nextStep() {
        this.currentStep = this.currentStep + 1
    }

    prevStep() {
        this.currentStep = this.currentStep - 1
    }

    resetSteps() {
        this.currentStep = 1
    }

    updateShopData(update) {
        this.shop = update(this.shop)
    }

    isPalette(palette) {
        function arrayEquals(a, b) {
            return Array.isArray(a) &&
                Array.isArray(b) &&
                a.length === b.length &&
                a.every((val, index) => val === b[index]);
        }

        return arrayEquals(this.getPalette(), palette)
    }

    async requestAccessToken(code) {
        const response = await $server.post('/oauth/token', {
            client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
            redirect_uri: process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI,
            grant_type: 'authorization_code',
            code
        })

        localStorage.setItem('token', response.data.access_token);

        return response.data.accessToken;
    }

    async requestUser() {
        const response = await $api.get('/user');
        const data = JSON.stringify(response.data.data);

        localStorage.setItem('user', data);
        this.setUser(data);

        return response.data.data;
    }
}

export default new Store()