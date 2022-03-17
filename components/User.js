import React, {useEffect, useState} from 'react';
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import store from "../store";
import {observer} from "mobx-react-lite";
import Dropdown from "./Dropdown";
import Router from "next/router";

const User = observer(() => {

    const [user, setUser] = useState(store.user)
    const [name, setName] = useState('')

    useEffect(() => {
        setUser(store.user)
    }, [store.user])

    useEffect(() => {
        user && setName(user.name || user.email)
    }, [user])

    const handleLogout = () => {
        localStorage.clear()
        Router.push('/login')
    }

    return user ? (
            <Dropdown
                options={[
                    {
                        title: 'Выйти',
                        handle: handleLogout
                    }
                ]}
                target={(
                    <div className={styles.user}>
                        <Image
                            src={'/images/avatar.png'}
                            width={50}
                            height={50}
                            alt={name}
                        />
                        <span className={styles.user__name}>{name}</span>
                    </div>
                )}
            />
    ) : <></>;
});

export default User;