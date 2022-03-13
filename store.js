import {makeAutoObservable} from "mobx";
import {$api, $server} from "./http";

class Store {
    stepsCount = 1;
    currentStep = 1;
    user = null;

    constructor() {
        makeAutoObservable(this)
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