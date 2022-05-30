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
    domains: '/domains/register',
}).map(([key, route]) => [key, process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL + route]))