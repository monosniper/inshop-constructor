import React from 'react';
import styles from "../../styles/Stylization.module.scss";
import StylesOption from "../StylesOption";
import {observer} from "mobx-react-lite";
import shop from "../../store/shop";
import constructor from "../../store/constructor";

const StylesGroup = ({group}) => {

    const options = group.items.map(option => {
        option.checked = shop.getLayoutOption(option.name)
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
                {constructor.layoutOptions.map((group, i) => <StylesGroup key={'styles-group-'+i} group={group} />)}
            </div>
        </div>
    );
});

export default Stylization;