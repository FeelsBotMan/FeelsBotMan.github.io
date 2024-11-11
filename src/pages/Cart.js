import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
var Cart = function () {
    var cartItems = useState([])[0];
    var calculateTotal = function () {
        return cartItems.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0);
    };
    var calculateSubtotal = function (price, quantity) {
        return (price * quantity).toLocaleString() + '원';
    };
    return (_jsxs("div", { className: "cart-container", children: [_jsxs("div", { className: "cart-header", children: [_jsx("h1", { children: "\uC7A5\uBC14\uAD6C\uB2C8" }), _jsx("p", { className: "cart-count", children: cartItems.length > 0 ? "".concat(cartItems.length, "\uAC1C\uC758 \uC0C1\uD488") : '' })] }), cartItems.length === 0 ? (_jsx("div", { className: "empty-cart", children: _jsxs("div", { className: "empty-cart-content", children: [_jsx("h2", { children: "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4" }), _jsx("p", { children: "\uC6D0\uD558\uB294 \uC0C1\uD488\uC744 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uC544\uBCF4\uC138\uC694" }), _jsxs(Link, { to: "/products", className: "shop-link", children: ["\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30", _jsx(ArrowRight, { size: 16 })] })] }) })) : (_jsxs("div", { className: "cart-content", children: [_jsx("div", { className: "cart-items", children: cartItems.map(function (item) { return (_jsxs("div", { className: "cart-item", children: [_jsx("div", { className: "item-image", children: _jsx("img", { src: item.imageUrl, alt: item.name }) }), _jsxs("div", { className: "item-details", children: [_jsxs("div", { className: "item-info", children: [_jsx("h3", { children: item.name }), _jsxs("p", { className: "item-price", children: [item.price.toLocaleString(), "\uC6D0"] })] }), _jsxs("div", { className: "item-actions", children: [_jsxs("div", { className: "quantity-controls", children: [_jsx("button", { className: "quantity-btn", children: _jsx(Minus, { size: 16 }) }), _jsx("span", { className: "quantity", children: item.quantity }), _jsx("button", { className: "quantity-btn", children: _jsx(Plus, { size: 16 }) })] }), _jsx("p", { className: "subtotal", children: calculateSubtotal(item.price, item.quantity) }), _jsx("button", { className: "remove-btn", children: _jsx(Trash2, { size: 16 }) })] })] })] }, item.id)); }) }), _jsxs("div", { className: "cart-summary", children: [_jsxs("div", { className: "summary-row", children: [_jsx("span", { children: "\uC0C1\uD488 \uAE08\uC561" }), _jsxs("span", { children: [calculateTotal().toLocaleString(), "\uC6D0"] })] }), _jsxs("div", { className: "summary-row", children: [_jsx("span", { children: "\uBC30\uC1A1\uBE44" }), _jsx("span", { children: "\uBB34\uB8CC" })] }), _jsxs("div", { className: "summary-total", children: [_jsx("span", { children: "\uCD1D \uACB0\uC81C\uAE08\uC561" }), _jsxs("span", { children: [calculateTotal().toLocaleString(), "\uC6D0"] })] }), _jsx("button", { className: "checkout-btn", children: "\uACB0\uC81C\uD558\uAE30" })] })] }))] }));
};
export default Cart;
