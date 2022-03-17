import {Col, Row} from "react-bootstrap";
import styles from '../styles/constructor.module.scss'
import ConstructorSteps from "../components/ConstructorSteps";
import General from "../components/steps/General";
import Palette from "../components/steps/Palette";
import Modules from "../components/steps/Modules";
import Stylization from "../components/steps/Stylization";

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
            content: <Stylization/>
        }
    ]

    return (
        <Row className='h-100'>
            <Col lg={6}>
                <div className={styles.constructor}>
                    <ConstructorSteps
                        steps={steps}
                    />
                </div>
            </Col>
            <Col>
                dsada
            </Col>
        </Row>
    );
};

export default Constructor;