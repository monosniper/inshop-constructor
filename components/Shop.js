import React, {useEffect, useState} from 'react';
import styles from "../styles/Dashboard.module.scss";
import Image from "next/image";
import Link from "next/link";
import {$routes} from "../http/routes";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';

const Shop = ({ shop }) => {

    const [title, setTitle] = useState('')
    const [domain, setDomain] = useState('')

    useEffect(() => {
        if(shop.options) {
            setTitle(shop.options.title)
        }

        setDomain(shop.domain)
    }, [])

    return (
        <Link href={$routes.shop(shop.id)}>
            <div className={styles.shop}>
                <div className={styles.shop__top}>
                    <Image
                        src={'/images/shop.png'}
                        height={55}
                        width={55}
                        alt={title}
                    />
                    <div className={styles.shop__details}>
                        <h4 className={styles.shop__name}>{title}</h4>
                        <p className={styles.shop__domain}>{domain}</p>
                    </div>
                </div>
                {shop.last_update ? (
                    <div className={styles.shop__bottom}>
                        <span className={styles.shop__changes}>
                            <Moment
                                date={shop.last_update}
                                fromNow
                                locale={'ru'}
                                ago
                                local
                            />
                        </span>
                    </div>
                ) : null}
            </div>
        </Link>
    );
};

export default Shop;