import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { ShoppingCart, Heart } from 'lucide-react';
var ProductList = function () {
    var searchParams = useSearchParams()[0];
    var category = searchParams.get('category');
    var _a = useProducts(category || undefined), products = _a.products, loading = _a.loading, error = _a.error;
    if (loading)
        return _jsx(LoadingSpinner, {});
    if (error)
        return _jsx("div", { className: "error-message", children: error.message });
    return (_jsxs("div", { className: "product-list-container", children: [_jsxs("div", { className: "product-list-header", children: [_jsx("h1", { children: category
                            ? "".concat(category.charAt(0).toUpperCase() + category.slice(1), " Keyboards")
                            : 'All Keyboards' }), _jsxs("p", { className: "product-count", children: [products.length, " products"] })] }), _jsx("div", { className: "product-grid", children: products.map(function (product) { return (_jsxs(Card, { className: "product-card", children: [_jsxs("div", { className: "product-image-container", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "product-image" }), _jsxs("div", { className: "product-actions", children: [_jsx("button", { className: "action-button", children: _jsx(Heart, { className: "icon" }) }), _jsx("button", { className: "action-button", children: _jsx(ShoppingCart, { className: "icon" }) })] }), product.isNew && (_jsx(Badge, { className: "product-badge new", children: "New" })), product.discount > 0 && (_jsxs(Badge, { className: "product-badge discount", children: ["-", product.discount, "%"] }))] }), _jsxs("div", { className: "product-info", children: [_jsx("h3", { className: "product-name", children: product.name }), _jsxs("div", { className: "product-price", children: [product.discount > 0 && (_jsxs("span", { className: "original-price", children: [product.price.toLocaleString(), "\uC6D0"] })), _jsxs("span", { className: "current-price", children: [(product.price * (1 - product.discount / 100)).toLocaleString(), "\uC6D0"] })] }), _jsx("p", { className: "product-description", children: product.description })] })] }, product.id)); }) }), products.length === 0 && (_jsxs("div", { className: "empty-state", children: [_jsx("h2", { children: "\uD604\uC7AC \uBAA8\uB4E0 \uC0C1\uD488\uC774 \uD488\uC808\uB418\uC5C8\uC2B5\uB2C8\uB2E4" }), _jsx("p", { children: "\uBE60\uB978 \uC2DC\uC77C \uB0B4\uC5D0 \uC7AC\uC785\uACE0\uB420 \uC608\uC815\uC785\uB2C8\uB2E4." })] }))] }));
};
export default ProductList;
