import React from 'react';
import styles from "../styles/Modules.module.scss";
import Switch from "react-switch";

const Option = ({title, checked, onChange}) => {
    return (
        <div className={styles.modules__item}>
            <span className={styles.modules__name}>{title}</span>
            <Switch
                onColor={'#242E56'}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
                checked={checked}
            />
        </div>
    );
};

export default Option;