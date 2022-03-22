import React, {useEffect, useState} from 'react';
import Option from "./Option";
import {observer} from "mobx-react-lite";
import shop from "../store/shop";

const StylesOption = observer(({title, name}) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        console.log(shop.options.layout)
        console.log(shop.getLayoutOption(name))
        setChecked(shop.getLayoutOption(name))
    }, [])

    const handleChange = (checked) => {
        setChecked(checked)
        shop.setLayoutOption(name, checked)
    }

    return <Option onChange={handleChange} title={title} checked={checked} />;
});

export default StylesOption;