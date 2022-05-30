import {$api, $server} from "../http";
import {$apiRoutes} from "../http/routes";
import {showError} from "../utils/showError";
import {$errors} from "../utils/errors";
import {$messages} from "../utils/messages";
import {showMessage} from "../utils/showMessage";

export default class ShopService {
    static status(code) {
        return code >= 200 && code < 301;
    }

    static async sendUpdate(id, options) {
        const response = await $api.put($apiRoutes.shops.update(id), options);

        const status = this.status(response.status);

        if(!status) return false;

        return response.data.data.options;
    }

    static async requestData(id) {
        const response = await $api.get($apiRoutes.shops.get(id));

        return response.data.data;
    }

    static async register(domain_id, options) {
        let response = {data: {data: null}}

        try {
            response =  await $api.post($apiRoutes.shops.create, {domain_id, options});

            showMessage($messages.created.shop)
        } catch (e) {
            showError(e.response.data.message)
        }

        return response.data.data;
    }
}