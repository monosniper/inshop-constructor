import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Dashboard.module.scss'

export default function Home() {
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
                <Link href={'/constructor'}>
                    <div className={styles.shop}>
                        <div className={styles.shop__top}>
                            <Image
                                src={'/images/shop.png'}
                                height={55}
                                width={55}
                                alt={'Shop name'}
                            />
                            <div className={styles.shop__details}>
                                <h4 className={styles.shop__name}>Новый магазин</h4>
                                <p className={styles.shop__domain}>shop.inshop.io</p>
                            </div>
                        </div>
                        <div className={styles.shop__bottom}>
                            <span className={styles.shop__changes}>Посл изменение: вчера</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
