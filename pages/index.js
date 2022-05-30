import Image from 'next/image'
import styles from '../styles/Dashboard.module.scss'
import {useEffect, useState} from "react";
import store from "../store/store";
import Shop from "../components/Shop";
import ReactModal from 'react-modal'
import {$serverRoutes} from "../http/routes";

import React from 'react';
import {observer} from "mobx-react-lite";

const Domain = observer(({ id, name }) => {
    const [itemClass, setItemClass] = useState(styles.domain)

    useEffect(() => {
        if(store.activeDomain === id) {
            setItemClass(styles.domain + ' ' + styles.domain_active)
        } else {
            setItemClass(styles.domain)
        }
    }, [store.activeDomain])

    const handleClick = (id) => {
        store.setActiveDomain(id);
    }

    return (
        <div onClick={() => handleClick(id)} className={itemClass}>{name}</div>
    );
});

function DomainsList({ handleSetActive }) {
    const [loading, setLoading] = useState(true)
    const [domains, setDomains] = useState([])

    useEffect(() => {
        store.getDomains().then((rs) => {
            setDomains(rs)
            setLoading(false)
        })
    }, [])

    return  <div className={styles.modal__list}>
        {domains.map(({id, name}) => <Domain key={'domain-'+id} id={id} name={name} />)}
    </div>;
}

export default function Home() {

    const [shops, setShops] = useState([])
    const [name, setName] = useState('')
    const [showAddShopModal, setShowAddShopModal] = useState(false)
    const [show2AddShopModal, setShow2AddShopModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const setShopsFromLocalStorage = () => {
        const localStorageShops = localStorage.getItem(store.localStorage.shops);

        if (localStorageShops) {
            setShops(JSON.parse(localStorageShops))
        }
    }

    const handleOpenAddShopModal = () => {
        setShowAddShopModal(true)
    }

    const handleCloseAddShopModal = () => {
        setShowAddShopModal(false)
    }

    useEffect(() => {
        setShopsFromLocalStorage()

        store.requestShops().then(() => {
            setShopsFromLocalStorage()
        });
    }, [])

    const handleNextStep = () => {
        if(store.activeDomain) {
            setShowAddShopModal(false)
            setShow2AddShopModal(true)
        }
    }

    const handleCreateShop = () => {
        if(name !== '') {
            store.registerShop(name)
            setShow2AddShopModal(false)
            setName('')
            store.setActiveDomain(false);
        }
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)

        _this.items.forEach((item, i) => {
            let pos = null;
            let len = null;

            if (searchQuery !== '') {
                const text = item.target.innerText.trim();

                pos = text.toLowerCase().search(searchQuery)

                if (pos !== -1) {
                    len = searchQuery.length;
                }
            }

            _this.items[i].pos = pos;
            _this.items[i].len = len;
        });

        _this.renderItems();
    }

    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.topbar__left}>
                    <h3 className={styles.topbar__title}>Ваши магазины</h3>
                </div>
                <div className={styles.topbar__right}>
                    <button onClick={handleOpenAddShopModal} className="button">
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
                        <input type="text" className={styles.searchbox__input} value={searchQuery} onChange={handleSearch} placeholder='Поиск'/>
                    </div>
                </div>
            </div>
            <div className={styles.shops}>
                {shops.map((shop, i) => <Shop key={'shop-' + i} shop={shop}/>)}
            </div>
            <ReactModal
                isOpen={showAddShopModal}
                contentLabel="Новый магазин"
                className={styles.modal}
                overlayClassName={styles.modal__overlay}
            >
                <h3 className={styles.modal__title}>Выберите домен</h3>

                <DomainsList />

                <a target={"_blank"} rel="noreferrer" href={$serverRoutes.domains} className={styles.modal__link}>Зарегистрировать домен</a>
                <div className={styles.modal__footer}>
                    <button onClick={handleCloseAddShopModal} className={styles.modal__button}>Отмена</button>
                    <button onClick={handleNextStep} className={styles.modal__button}>Далее</button>
                </div>
            </ReactModal>
            <ReactModal
                isOpen={show2AddShopModal}
                contentLabel="Новый магазин"
                className={styles.modal}
                overlayClassName={styles.modal__overlay}
            >
                <h3 className={styles.modal__title}>Введите название</h3>

                <input type="text" className={styles.modal__field} value={name} onChange={(e) => setName(e.target.value)}/>

                <div className={styles.modal__footer}>
                    <button onClick={handleCloseAddShopModal} className={styles.modal__button}>Отмена</button>
                    <button onClick={handleCreateShop} className={styles.modal__button}>Готово</button>
                </div>
            </ReactModal>
        </>
    )
}
