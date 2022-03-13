import React, {useRef} from 'react';
import styles from "../../styles/constructor.module.scss";

const General = () => {
    const logoRef = useRef();

    const clickLogoUpload = () => {
        logoRef.current.click();
    }

    return (
        <>
            <input placeholder={'Название...'} type="text" className={styles.constructor__field} />
            <input placeholder={'Слоган...'} type="text" className={styles.constructor__field} />
            <input ref={logoRef} type="file" id="logo"/>
            <div onClick={clickLogoUpload} className={styles.constructor__upload}>
                <p>Выберите логотип</p>
            </div>
        </>
    );
};

export default General;