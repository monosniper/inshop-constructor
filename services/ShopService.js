import {$api, $server} from "../http";
import {$apiRoutes} from "../http/routes";

export default class ShopService {
    static status(code) {
        return code >= 200 && code < 301;
    }

    static async sendUpdate(id, options) {
        const response = await $api.put($apiRoutes.shops.update(id), options);

        return this.status(response.status);
    }

    static async requestData(id) {
        const response = await $api.get($apiRoutes.shops.get(id));

        return response.data;
    }
}