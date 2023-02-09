import { FC } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "@/app/pages/home";

export const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>
    );
};