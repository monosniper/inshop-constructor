import React, {useEffect, useState} from 'react';
import 'reactjs-popup/dist/index.css';
import styles from '../../styles/Palette.module.scss'
import Popup from "reactjs-popup";
import { SketchPicker } from 'react-color'
import PaletteBlock from "../PaletteBlock";
import {observer} from "mobx-react-lite";
import shop from "../../store/shop";
import constructor from "../../store/constructor";

const Palette = observer(() => {
    const [ownPalette, setOwnPalette] = useState(() => {
        if(shop.options.hasOwnPalette) {
            return shop.options.ownPalette;
        }

        return [
            '#fff',
            '#fff',
            '#fff',
        ]
    })

    const [oldOwnPalette, setOldOwnPalette] = useState(ownPalette)

    const [pickers, setPickers] = useState([
        false,
        false,
        false,
    ])

    const handleClick = (i) => {
        let pickerDisplay = [...pickers]
        pickerDisplay[i] = !pickerDisplay[i]

        setPickers(pickerDisplay)
    };

    const handleClose = (i) => {
        let pickerDisplay = [...pickers]
        pickerDisplay[i] = false

        setPickers(pickerDisplay)
    };

    const handleChange = (color, i) => {
        let newPalette = [...ownPalette]
        newPalette[i] = color.hex

        setOwnPalette(newPalette)
    };

    const handleOpen = () => {
        shop.setHasOwnPalette(true)
    };

    const handleCancel = (close) => {
        close()

        setOwnPalette(oldOwnPalette)
    }

    const handleReady = (close) => {
        close()
    }

    useEffect(() => {
        shop.setOwnPalette(ownPalette)

        if(shop.isOwnPalette()) {
            shop.setPalette(ownPalette)
        }
    }, [ownPalette])

    return (
        <>
            <div className={styles.palette__wrapper}>
                <div className={styles.palette__container}>
                    {shop.options.hasOwnPalette && <PaletteBlock palette={ownPalette} />}
                    {constructor.palettes.map((palette, i) => <PaletteBlock key={'palette-'+i} palette={palette} />)}
                </div>
            </div>

            <div className="text-center mt-5">
                <h4>
                    Или создайте
                    <Popup onOpen={handleOpen} closeOnDocumentClick={false} trigger={<span style={{marginLeft: '.5rem',cursor: 'pointer'}} className={'red'}>свою</span>} modal>
                        {close => (
                            <div className={styles.ownPalette}>
                                <div className={styles.ownPalette__container}>
                                    {ownPalette.map((color, i) => (
                                        <div key={'picker-'+i}>
                                            <div className={styles.swatch} onClick={ () => handleClick(i) }>
                                                <div className={styles.color} style={{ background: ownPalette[i]} } />
                                            </div>

                                            { pickers[i] ? <div className={styles.popover}>
                                                <div className={styles.cover} onClick={ () => handleClose(i) }/>
                                                <SketchPicker color={ color } onChange={ (color) => handleChange(color, i) } />
                                            </div> : null }
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.ownPalette__footer}>
                                    <button onClick={() => handleCancel(close)} className={'button'}>Отмена</button>
                                    <button onClick={() => handleReady(close)} className={'button button_primary'}>Готово</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </h4>
            </div>
        </>
    );
});

export default Palette;