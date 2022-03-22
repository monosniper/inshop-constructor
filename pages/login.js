import React, {useEffect, useState} from 'react';
import OAuth2Login from "react-simple-oauth2-login";
import randomstring from "randomstring";
import store from "../store/store";
import styles from "../styles/Login.module.scss";
import {observer} from "mobx-react-lite";
import {useRouter} from "next/router";

const Login = observer(() => {

    const router = useRouter();
    const [state, setState] = useState()

    const getState = () => {
        let state = localStorage.getItem('state')

        if(!state) {
            state = randomstring.generate()

            localStorage.setItem('state', state);
        }

        return state;
    }

    const onSuccess = (data) => {
        data.state === state && store.requestAccessToken(data.code).then(() => {
            store.requestUser()
        })
    }

    useEffect(() => {
        setState(getState())

        store.setUser(JSON.parse(localStorage.getItem('user')))

        if (store.user) {
            router.push('/');
        }
    }, [store.user])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h4 className={styles.title}>Для продолжения необходимо авторизоваться</h4>
                <OAuth2Login
                    authorizationUrl="https://salonmono.space/oauth/authorize"
                    responseType="code"
                    clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
                    redirectUri={process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI}
                    onSuccess={onSuccess}
                    className={styles.button + ' button'}
                    buttonText={'Авторизация'}
                    onFailure={(rs) => console.log(rs)}
                    state={state}
                />
            </div>
        </div>
    );
});

export default Login;