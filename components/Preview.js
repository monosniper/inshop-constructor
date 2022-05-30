import React, {useEffect} from 'react';
import Image from 'next/image'
import styles from '../styles/Preview.module.scss'
import shop from "../store/shop";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Preview = observer(() => {
    return (
        <div className={styles.preview}>
            <div className={styles.preview__laptop + ' ' + styles.preview__item}>
                <iframe scrolling={'no'} src={"https:/" + shop.domain} frameBorder="0"/>
                {/*<img src="/images/preview/laptop.png" alt="laptop"/>*/}
            </div>

            <div className={styles.preview__tablet + ' ' + styles.preview__item}>
                <iframe scrolling={'no'} src={"https:/" + shop.domain} frameBorder="0"/>
                {/*<img src="/images/preview/tablet.png" alt="tablet"/>*/}
            </div>

            <div className={styles.preview__mobile + ' ' + styles.preview__item}>
                <iframe scrolling={'no'} src={"https:/" + shop.domain} frameBorder="0"/>
                {/*<img src="/images/preview/mobile.png" alt="mobile"/>*/}
            </div>
        </div>
    );
});

export default Preview;