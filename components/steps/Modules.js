import React from 'react';
import styles from '../../styles/Modules.module.scss'
import Module from "../Module";
import {observer} from "mobx-react-lite";
import constructor from "../../store/constructor";
import shop from "../../store/shop";

const Modules = observer(() => {
    const modules = constructor.modules.map(module => {
        module.checked = shop.hasModule(module.name)
        return module;
    })

    return (
        <div className={styles.modules}>
            <div className={styles.modules__wrapper}>
                {modules.map((module, i) => <Module module={module} key={'module-'+i} />)}
            </div>
        </div>
    );
});

export default Modules;