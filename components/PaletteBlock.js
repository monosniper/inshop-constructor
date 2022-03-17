import React, {useEffect, useState} from 'react';
import styles from "../styles/Palette.module.scss";
import store from "../store";
import {observer} from "mobx-react-lite";

const PaletteBlock = observer(({palette}) => {

    const [itemClass, setItemClass] = useState(styles.palette__item)

    const handleClick = () => {
        store.updateShopData((shop) => {
            shop.data.palette = palette;
            return shop;
        })
    }

    useEffect(() => {
        if(store.isPalette(palette)) {
            setItemClass(styles.palette__item + ' ' + styles.active)
        } else {
            setItemClass(styles.palette__item)
        }
    }, [store.shop.data.palette])

    return (
        <div onClick={handleClick} className={itemClass}>
            {palette.map((color, k) => (
                <span key={'color-' + k} className={styles.palette__color} style={{background: color}}/>
            ))}
        </div>
    )
});

export default PaletteBlock;