import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import store from "../store/store";
import {$routes} from "../http/routes";
import ErrorBoundary from "./ErrorBoundary";

const MyApp = observer(({ Component, pageProps }) => {

    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // run auth check on initial load
        authCheck(router.asPath);

        // set authorized to false to hide page content while changing routes
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // run auth check on route change
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = [$routes.login];
        const path = url.split('?')[0];

        if (!store.user && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: $routes.login,
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (
        <ErrorBoundary>
            <Layout>
                {authorized && <Component {...pageProps} />}
            </Layout>
        </ErrorBoundary>
    )
})

export default MyApp
