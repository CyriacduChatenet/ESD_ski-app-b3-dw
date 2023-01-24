import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from "@/pages/home";
import ProductPage from "@/pages/product";


const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/product/:id'} element={<ProductPage />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;