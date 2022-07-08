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
    const [language, setLanguage] = useState(shop.options.language)
    const languages = [
        {
            title: 'Русский',
            value: 'ru',
        },
        {
            title: 'Английский',
            value: 'en',
        },
    ]

    useEffect(() => {
        shop.setTitle(title)
        shop.setSlogan(slogan)
        shop.setLanguage(language)
    }, [title, slogan, language])

    useEffect(() => {
        if(shop.options) {
            setTitle(shop.options.title)
            setSlogan(shop.options.slogan)
            setLanguage(shop.options.language)
        } else {
            setTitle('')
            setSlogan('')
            setLanguage('ru')
        }
    }, [shop.options])

    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

    return (
        <>
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder={'Название...'} type="text" className={styles.constructor__field} />
            <input onChange={(e) => setSlogan(e.target.value)} value={slogan} placeholder={'Слоган...'} type="text" className={styles.constructor__field} />
            <select onChange={(e) => setLanguage(e.target.value)} value={language} className={styles.constructor__field}>
                {languages.map((lang, i) => <option value={lang.value} key={'lang-'+i}>{lang.title}</option>)}
            </select>
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