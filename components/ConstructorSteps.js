import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import ConstructorStep from "./ConstructorStep";
import constructor from "../store/constructor";

const ConstructorSteps = observer((props) => {
    useEffect(() => {
        constructor.setStepsCount(props.steps.length)
    }, [])

    return <ConstructorStep {...props.steps[constructor.currentStep - 1]} />;
})

export default ConstructorSteps