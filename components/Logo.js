import React from 'react';
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link className={styles.logo} href={'/'} passHref>
            <Image
                src={'/images/logo.png'}
                width={120}
                height={35}
                alt={process.env.NEXT_PUBLIC_APP_NAME}
            />
        </Link>
    );
};

export default Logo;