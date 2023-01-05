import { FC } from "react";

import Navbar from "@/components/navbar";

import styles from '@/components/layout/style.module.scss';


type IProps = {
    children?: JSX.Element;
};

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
        <Navbar />
        <main className={styles.main}>
            {children}
        </main>
        </>
    );
};

export default Layout;