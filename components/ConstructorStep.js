import {observer} from "mobx-react-lite";
import styles from "../styles/constructor.module.scss";
import store from "../store";
import Link from "next/link";
import React from "react";

const ConstructorStep = observer((props) => {
    return (
        <>
            <div className={styles.constructor__top}>
                <p className={styles.constructor__step}>Шаг {store.currentStep} из {store.stepsCount}</p>
                <h4 className={styles.constructor__title}>{props.title}</h4>

                {props.content}
            </div>

            <div className={styles.constructor__bottom}>
                <div>
                    {store.currentStep > 1 && (
                        <button onClick={() => store.prevStep()} className={styles.constructor__button}>Назад</button>
                    )}
                </div>
                <div>
                    {store.currentStep < store.stepsCount ? (
                        <button onClick={() => store.nextStep()} className={styles.constructor__button + ' ' + styles.constructor__button_primary}>
                            Далее
                        </button>
                    ) : (
                        <Link href={'/'}>
                            <button onClick={() => store.resetSteps()} className={styles.constructor__button + ' ' + styles.constructor__button_primary}>
                                Готово
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
})

export default ConstructorStep