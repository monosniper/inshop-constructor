import React, {useEffect, useState} from 'react';
import styles from "../styles/Palette.module.scss";
import {observer} from "mobx-react-lite";
import shop from "../store/shop";

const PaletteBlock = observer(({palette}) => {

    const [isActive, setIsActive] = useState(false)
    const [itemClass, setItemClass] = useState(styles.palette__item)

    const handleClick = () => {
        shop.setPalette(palette)
    }
    
    useEffect(() => {
        setIsActive(shop.isPalette(palette))
    }, [shop.options.palette])

    useEffect(() => {
        setItemClass(isActive ? styles.palette__item + ' ' + styles.active : styles.palette__item)
    }, [isActive])

    return (
        <div onClick={handleClick} className={itemClass}>
            {palette.map((color, k) => (
                <span key={'color-' + k} className={styles.palette__color} style={{background: color}}/>
            ))}
        </div>
    )
});

export default PaletteBlock;