import React, {useEffect} from 'react';
import styles from "../styles/Dashboard.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>{ children }</main>
        </div>
    );
};

export default Layout;