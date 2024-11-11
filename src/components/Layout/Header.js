import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, forwardRef } from 'react';
var CATEGORIES = [
    {
        id: 1,
        name: '전체',
        link: '/products'
    },
    {
        id: 2,
        name: '기계식',
        link: '/products?category=mechanical'
    },
    {
        id: 3,
        name: '무선',
        link: '/products?category=wireless'
    },
    {
        id: 4,
        name: '게이밍',
        link: '/products?category=gaming'
    }
];
var Header = forwardRef(function (props, ref) {
    var _a = useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var toggleMenu = function () { return setIsMenuOpen(!isMenuOpen); };
    return (_jsxs("header", { className: "header-container", ref: ref, children: [_jsx("div", { className: "header-banner", children: _jsx("p", { children: "\uBB34\uB8CC \uBC30\uC1A1 \uC774\uBCA4\uD2B8 \uC9C4\uD589\uC911! \uD83C\uDF89" }) }), _jsx("div", { className: "header-main", children: _jsxs("div", { className: "header-content", children: [_jsx(Link, { to: "/", className: "header-logo", children: "KeyboardStore" }), _jsx("nav", { className: "header-nav desktop-nav", children: CATEGORIES.map(function (category) { return (_jsx(Link, { to: category.link, className: "nav-link", children: category.name }, category.id)); }) }), _jsxs("div", { className: "header-actions", children: [_jsxs(Link, { to: "/cart", className: "cart-link", children: [_jsx(ShoppingCart, { size: 20 }), _jsx("span", { className: "cart-badge", children: "0" })] }), _jsx("button", { className: "menu-button", onClick: toggleMenu, children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] })] }) }), isMenuOpen && (_jsx("nav", { className: "mobile-nav", children: CATEGORIES.map(function (category) { return (_jsx(Link, { to: category.link, className: "mobile-nav-link", onClick: toggleMenu, children: category.name }, category.id)); }) }))] }));
});
export default Header;
