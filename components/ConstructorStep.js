import {observer} from "mobx-react-lite";
import styles from "../styles/constructor.module.scss";
import Link from "next/link";
import React from "react";
import shop from "../store/shop";
import constructor from "../store/constructor";

const ConstructorStep = observer((props) => {

    const handleFinish = () => {
        constructor.resetSteps()

        if(shop.hasUpdates()) {
            shop.sendShopUpdate()
        }
    }

    return (
        <>
            <div className={styles.constructor__top}>
                <p className={styles.constructor__step}>Шаг {constructor.currentStep} из {constructor.stepsCount}</p>
                <h4 className={styles.constructor__title}>{props.title}</h4>

                {props.content}
            </div>

            <div className={styles.constructor__bottom}>
                <div>
                    {constructor.currentStep > 1 && (
                        <button onClick={() => constructor.prevStep()} className={styles.constructor__button}>Назад</button>
                    )}
                </div>
                <div>
                    {constructor.currentStep < constructor.stepsCount ? (
                        <button onClick={() => constructor.nextStep()} className={styles.constructor__button + ' ' + styles.constructor__button_primary}>
                            Далее
                        </button>
                    ) : (
                        <Link href={'/'}>
                            <button onClick={() => handleFinish()} className={styles.constructor__button + ' ' + styles.constructor__button_primary}>
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