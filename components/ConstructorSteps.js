import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import store from "../store";
import ConstructorStep from "./ConstructorStep";

const ConstructorSteps = observer((props) => {
    useEffect(() => {
        store.setStepsCount(props.steps.length)
    }, [])

    return <ConstructorStep {...props.steps[store.currentStep - 1]} />;
})

export default ConstructorSteps