import React, {useEffect, useRef, useState} from 'react';
import styles from "../../styles/constructor.module.scss";
import {FilePond, registerPlugin} from "react-filepond";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import "filepond/dist/filepond.min.css";
import shop from "../../store/shop";
import {observer} from "mobx-react-lite";

const General = () => {
    const [files, setFiles] = useState([])
    const [title, setTitle] = useState(shop.options.title)
    const [slogan, setSlogan] = useState(shop.options.slogan)

    useEffect(() => {
        shop.setTitle(title)
        shop.setSlogan(slogan)
    }, [title, slogan])

    useEffect(() => {
        if(shop.options) {
            setTitle(shop.options.title)
            setSlogan(shop.options.slogan)
        } else {
            setTitle('')
            setSlogan('')
        }
    }, [shop.options])

    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

    return (
        <>
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder={'Название...'} type="text" className={styles.constructor__field} />
            <input onChange={(e) => setSlogan(e.target.value)} value={slogan} placeholder={'Слоган...'} type="text" className={styles.constructor__field} />
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                server="/api"
                name="logo"
                labelIdle='Выберите логотип'
                credits={false}
            />
        </>
    );
};

export default observer(General);