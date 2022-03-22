import Image from 'next/image'
import styles from '../styles/Dashboard.module.scss'
import {useEffect, useState} from "react";
import store from "../store/store";
import Shop from "../components/Shop";

export default function Home() {

    const [shops, setShops] = useState([])

    const setShopsFromLocalStorage = () => {
        const localStorageShops = localStorage.getItem(store.localStorage.shops);

        if(localStorageShops) {
            setShops(JSON.parse(localStorageShops))
        }
    }

    useEffect(() => {
        setShopsFromLocalStorage()

        store.requestShops().then(() => {
            setShopsFromLocalStorage()
        });
    }, [])

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbar__left}>
                    <h3 className={styles.topbar__title}>Ваши магазины</h3>
                </div>
                <div className={styles.topbar__right}>
                    <button className="button">
                        + Новый магазин
                    </button>
                    <div className={styles.searchbox}>
                        <span className={styles.searchbox__icon}>
                            <Image
                                src={'/images/icons/search.png'}
                                height={15}
                                width={15}
                                alt={'Search'}
                            />
                        </span>
                        <input type="text" className={styles.searchbox__input} placeholder='Поиск'/>
                    </div>
                </div>
            </div>
            <div className={styles.shops}>
                {shops.map((shop, i) => <Shop key={'shop-'+i} shop={shop} />)}
            </div>
        </>
    )
}
