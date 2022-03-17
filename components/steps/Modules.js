import React from 'react';
import styles from '../../styles/Modules.module.scss'
import Module from "../Module";
import store from "../../store";
import {observer} from "mobx-react-lite";

const Modules = observer(() => {
    const modules = [
        {
            name: 'auth',
            title: 'Регистрация и авторизация',
        },
        {
            name: 'basket',
            title: 'Корзина',
        },
        {
            name: 'search',
            title: 'Поиск по сайту',
        },
        {
            name: 'multi-language',
            title: 'Мультиязычность',
        },
        {
            name: 'hide-watermark',
            title: 'Убрать значок “Сделано с помощью Inshop”',
        },
        {
            name: 'wishlist',
            title: 'Избранное',
        },
        {
            name: 'chat',
            title: 'Онлайн чат',
        },
        {
            name: 'themes',
            title: 'Светлый и темный режим',
        },
        {
            name: 'delivery',
            title: 'Доставки',
        },
    ].map(module => {
        module.checked = store.hasModule(module.name)
        return module;
    })

    return (
        <div className={styles.modules}>
            <div className={styles.modules__wrapper}>
                {modules.map((module, i) => <Module module={module} key={'module-'+i} />)}
            </div>
        </div>
    );
});

export default Modules;