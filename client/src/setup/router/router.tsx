import { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from "@/app/pages/home";
import ProductPage from "@/app/pages/product";


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