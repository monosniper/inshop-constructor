import React from 'react';
import styles from '../styles/404.module.scss'

const Error404 = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>404</h1>
                <div className={styles.description} >
                    <h2>Страница не найдена.</h2>
                </div>
            </div>
        </div>
    );
};

export default Error404;