import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const Callback = () => {

    const router = useRouter()

    useEffect(() => {
        console.log('test')
        console.log(router)
        console.log(router.query)
    })

    return (
        <div>
            callback
        </div>
    );
};

export default Callback;