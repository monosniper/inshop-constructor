import React, {useState} from 'react';
import store from "../store";
import Option from "./Option";
import {observer} from "mobx-react-lite";

const StylesOption = observer(({title, name}) => {
    const [checked, setChecked] = useState(store.shop.styles[name])

    const handleChange = (checked) => {
        setChecked(checked)
        store.setStyle(name, checked)
    }

    return <Option onChange={handleChange} title={title} checked={checked} />;
});

export default StylesOption;