import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
var Cart = function () {
    var cartItems = useState([])[0];
    var calculateTotal = function () {
        return cartItems.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0);
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "\uC7A5\uBC14\uAD6C\uB2C8" }), cartItems.length === 0 ? (_jsx("div", { className: "text-center py-8", children: _jsx("p", { children: "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4." }) })) : (_jsxs("div", { children: [cartItems.map(function (item) { return (_jsxs("div", { className: "flex items-center gap-4 bg-white p-4 rounded-lg shadow mb-4", children: [_jsx("img", { src: item.imageUrl, alt: item.name, className: "w-24 h-24 object-cover rounded" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold", children: item.name }), _jsxs("p", { children: [item.price.toLocaleString(), "\uC6D0"] }), _jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx("button", { className: "px-2 py-1 border rounded", children: "-" }), _jsx("span", { children: item.quantity }), _jsx("button", { className: "px-2 py-1 border rounded", children: "+" })] })] })] }, item.id)); }), _jsx("div", { className: "bg-white p-4 rounded-lg shadow mt-4", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-semibold", children: "\uCD1D \uAE08\uC561:" }), _jsxs("span", { className: "font-bold text-xl", children: [calculateTotal().toLocaleString(), "\uC6D0"] })] }) })] }))] }));
};
export default Cart;
