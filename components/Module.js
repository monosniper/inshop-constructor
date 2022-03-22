import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import Option from "./Option";
import shop from "../store/shop";

const Module = observer(({module}) => {
    const [checked, setChecked] = useState(shop.getModules().indexOf(module.name) !== -1)

    const handleChange = (checked) => {
        setChecked(checked)

        let modules = shop.getModules()

        if(checked) {
            modules.push(module.name)
        } else {
            modules.splice(modules.indexOf(module.name), 1)
        }

        shop.setModules(modules)
    }

    return <Option onChange={handleChange} title={module.title} checked={checked} />;
})

export default Module;