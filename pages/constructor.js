import {Col, Row} from "react-bootstrap";
import styles from '../styles/constructor.module.scss'
import ConstructorSteps from "../components/ConstructorSteps";
import General from "../components/steps/General";
import Palette from "../components/steps/Palette";
import Modules from "../components/steps/Modules";
import Styles from "../components/steps/Styles";

const Constructor = () => {
    const steps = [
        {
            title: 'Общие сведения',
            content: <General/>
        },
        {
            title: 'Выберите цветовую палитру сайта',
            content: <Palette/>
        },
        {
            title: 'Определите составные модули',
            content: <Modules/>
        },
        {
            title: 'Стилизация',
            content: <Styles/>
        }
    ]

    return (
        <Row className='h-100'>
            <Col className={styles.constructor}>
                <ConstructorSteps
                    steps={steps}
                />
            </Col>
            <Col></Col>
        </Row>
    );
};

export default Constructor;