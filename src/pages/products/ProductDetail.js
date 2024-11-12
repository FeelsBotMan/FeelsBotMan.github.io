import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
var ProductDetail = function () {
    var id = useParams().id;
    var _a = useState(1), quantity = _a[0], setQuantity = _a[1];
    // 실제 구현시에는 API로 상품 정보를 가져와야 함
    var product = useState({
        id: '1',
        name: '상품명',
        price: 29000,
        description: '상품 상세 설명입니다.',
        imageUrl: '/images/product-1.jpg'
    })[0];
    var handleQuantityChange = function (value) {
        if (quantity + value > 0) {
            setQuantity(quantity + value);
        }
    };
    var handleAddToCart = function () {
        // 장바구니 추가 로직 구현
        console.log('장바구니에 추가:', {
            productId: id,
            quantity: quantity
        });
    };
    return (_jsx("div", { className: "max-w-6xl mx-auto p-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { className: "product-image", children: _jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full rounded-lg" }) }), _jsxs("div", { className: "product-info", children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: product.name }), _jsxs("p", { className: "text-2xl font-semibold mb-6", children: [product.price.toLocaleString(), "\uC6D0"] }), _jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: "\uC0C1\uD488 \uC124\uBA85" }), _jsx("p", { className: "text-gray-600", children: product.description })] }), _jsxs("div", { className: "quantity-selector mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: "\uC218\uB7C9" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("button", { onClick: function () { return handleQuantityChange(-1); }, className: "px-3 py-1 border rounded", children: "-" }), _jsx("span", { children: quantity }), _jsx("button", { onClick: function () { return handleQuantityChange(1); }, className: "px-3 py-1 border rounded", children: "+" })] })] }), _jsxs("div", { className: "total-price mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: "\uCD1D \uC0C1\uD488\uAE08\uC561" }), _jsxs("p", { className: "text-2xl font-bold", children: [(product.price * quantity).toLocaleString(), "\uC6D0"] })] }), _jsxs("button", { onClick: handleAddToCart, className: "w-full bg-blue-600 text-white py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700", children: [_jsx(ShoppingCart, { size: 20 }), _jsx("span", { children: "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30" })] })] })] }) }));
};
export default ProductDetail;
