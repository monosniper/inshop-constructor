import React from 'react';
import styles from "../../styles/Stylization.module.scss";
import StylesOption from "../StylesOption";
import {observer} from "mobx-react-lite";
import constructor from "../../store/constructor";

const StylesGroup = ({group}) => {
    return (
        <div className={styles.stylization__group}>
            <h4 className={styles.stylization__title}>{group.title}</h4>
            <div className={styles.stylization__items}>
                {group.items.map((option, i) => (
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