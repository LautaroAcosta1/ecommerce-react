import React from "react";
import ReactDOM from "react-dom/client";
import DataProvider from "./context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import CartContent from "./cartContent/CartContent";
import NavBar from "./navBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <DataProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<CartContent/>}/>
            </Routes>
        </BrowserRouter>
    </DataProvider>
)