import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import styles from '../styles/Preview.module.scss'
import shop from "../store/shop";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Preview = observer(() => {
    const [showFrame, setShowFrame] = useState(true)
    const [device, setDevice] = useState('desktop')
    const frameRef = React.createRef()

    return (
        <div className={styles.preview}>
            <div className="preview">
                <div className={styles.switcher}>
                    <div onClick={() => setDevice('desktop')} className={styles.switcher__item+('desktop'===device?' '+styles.active:'')}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                        </svg>
                    </div>
                    <div onClick={() => setDevice('tablet-p')} className={styles.switcher__item+('tablet-p'===device?' '+styles.active:'')}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>
                        </svg>
                    </div>
                    <div onClick={() => setDevice('mobile-p')} className={styles.switcher__item+('mobile-p'===device?' '+styles.active:'')}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                        </svg>
                    </div>
                </div>

                <div className={`device device-${device}`}>
                    {/*{showFrame && <iframe ref={frameRef} sandbox="allow-same-origin allow-forms allow-scripts" src={"http://localhost:3000"}></iframe>}*/}
                    {showFrame && <iframe ref={frameRef} sandbox="allow-same-origin allow-forms allow-scripts" src={"https://" + shop.domain}></iframe>}
                    {/*<iframe src={"https://" + shop.domain}></iframe>*/}
                </div>
            </div>
            {/*<div className={styles.preview__laptop + ' ' + styles.preview__item}>*/}
            {/*    <iframe scrolling={'no'} src={"https://" + shop.domain} frameBorder="0"/>*/}
            {/*    /!*<img src="/images/preview/laptop.png" alt="laptop"/>*!/*/}
            {/*</div>*/}

            {/*<div className={styles.preview__tablet + ' ' + styles.preview__item}>*/}
            {/*    <iframe scrolling={'no'} src={"https://" + shop.domain} frameBorder="0"/>*/}
            {/*    /!*<img src="/images/preview/tablet.png" alt="tablet"/>*!/*/}
            {/*</div>*/}

            {/*<div className={styles.preview__mobile + ' ' + styles.preview__item}>*/}
            {/*    <iframe scrolling={'no'} src={"https://" + shop.domain} frameBorder="0"/>*/}
            {/*    /!*<img src="/images/preview/mobile.png" alt="mobile"/>*!/*/}
            {/*</div>*/}
        </div>
    );
});

export default Preview;