import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
var Layout = function () {
    var mainRef = useRef(null);
    return (_jsxs("div", { id: "body-layout", children: [_jsx(Header, {}), _jsx("main", { id: "main-layout", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Layout;