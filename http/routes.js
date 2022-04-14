export const $routes = {
    login: '/login',
    shop: (id) => `/constructor/${id}`
}

export const $apiRoutes = {
    user: '/user',
    token: '/oauth/token',
    domains: {
        list: 'user/domains',
    },
    shops: {
        list: 'user/shops',
        create: 'shops',
        update: (id) => `shops/${id}`,
        get: (id) => `/shops/${id}`
    }
}

export const $serverRoutes = Object.fromEntries(Object.entries({
    domains: '/domains',
}).map(([key, route]) => [key, 'https://salonmono.space' + route]))