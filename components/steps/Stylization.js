import React from 'react';
import store from "../../store";
import styles from "../../styles/Stylization.module.scss";
import StylesOption from "../StylesOption";
import {observer} from "mobx-react-lite";

const StylesGroup = ({group}) => {

    const options = group.items.map(option => {
        option.checked = store.shop.styles[option.name]
        return option;
    })

    return (
        <div className={styles.stylization__group}>
            <h4 className={styles.stylization__title}>{group.title}</h4>
            <div className={styles.stylization__items}>
                {options.map((option, i) => (
                    <StylesOption key={'option-'+i} title={option.title} name={option.name} />
                ))}
            </div>
        </div>
    );
};

const Stylization = observer(() => {
    return (
        <div className={styles.stylization}>
            <div className={styles.stylization__wrapper}>
                {store.styles.map((group, i) => <StylesGroup key={'styles-group-'+i} group={group} />)}
            </div>
        </div>
    );
});

export default Stylization;