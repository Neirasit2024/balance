import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/home';
import Basket from '../pages/Basket/basket';
import Admin from '../pages/Admin/admin';



const RoutePages = () => {
        const PAGES = [
            {path: "/home", element: <Home/>, key: 1},
            {path: "/admin", element: <Admin/>, key: 2},
            {path: "/basket", element: <Basket/>, key: 3},
        ]
    return (
        <Routes>
            {
                PAGES.map(el=>(
                    <Route path={el.path} element={el.element} key={el.key}/>
                ))
            }
        </Routes>
    );
};

export default RoutePages;