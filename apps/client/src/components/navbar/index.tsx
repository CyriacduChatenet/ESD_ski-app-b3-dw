import { FC } from "react";

import styles from '@/components/navbar/style.module.scss'


const Navbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <p className={styles.logo}>Ski app</p>
        </nav>
    );
};

export default Navbar;