import React, {useRef, useState} from 'react';
import styles from "../../styles/constructor.module.scss";
import {FilePond, registerPlugin} from "react-filepond";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import "filepond/dist/filepond.min.css";

const General = () => {
    const logoRef = useRef();
    const [files, setFiles] = useState([])

    const clickLogoUpload = () => {
        logoRef.current.click();
    }

    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

    return (
        <>
            <input placeholder={'Название...'} type="text" className={styles.constructor__field} />
            <input placeholder={'Слоган...'} type="text" className={styles.constructor__field} />
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

export default General;