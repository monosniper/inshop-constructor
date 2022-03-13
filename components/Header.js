import React from 'react';
import styles from '../styles/Header.module.scss'
import User from "./User";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__left}><Logo /></div>
            <div className={styles.header__right}><User /></div>
        </header>
    );
};

export default Header;