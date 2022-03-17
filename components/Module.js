import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import store from "../store";
import Option from "./Option";

const Module = observer(({module}) => {
    const [checked, setChecked] = useState(store.getModules().indexOf(module.name) !== -1)

    const handleChange = (checked) => {
        setChecked(checked)

        store.updateShopData(shop => {
            let modules = store.getModules()

            if(checked) {
                modules.push(module.name)
            } else {
                modules.splice(modules.indexOf(module.name), 1)
            }

            shop.modules = modules;

            return shop;
        })
    }

    return <Option onChange={handleChange} title={module.title} checked={checked} />;
})

export default Module;