import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../routes/home/home.components.js";
import Shop from "../../routes/shop/shop.component.js";
import Navigation from "../../routes/navigation/navigation.component.js";
import Authentication from "../../routes/authentication/authentication.component";

//  Outlet acts as a placeholder for nested routes to display their UI

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="authentication" element={<Authentication />} />
            </Route>
        </Routes>
    )
}