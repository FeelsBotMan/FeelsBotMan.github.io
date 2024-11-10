import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import LoadingSpinner from "../components/common/LoadingSpinner";
var ProductList = function () {
    var searchParams = useSearchParams()[0];
    var category = searchParams.get('category');
    var _a = useProducts(category || undefined), products = _a.products, loading = _a.loading, error = _a.error;
    if (loading)
        return _jsx(LoadingSpinner, {});
    if (error)
        return _jsx("div", { className: "text-center py-8 text-red-600", children: error.message });
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: category ? "".concat(category.charAt(0).toUpperCase() + category.slice(1), " Keyboards") : 'All Keyboards' }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: products.map(function (product) { return (_jsxs(Card, { className: "overflow-hidden", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-48 object-cover" }), _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: product.name }), _jsxs("p", { className: "text-gray-600 mb-4", children: ["$", product.price.toLocaleString(), " - ", product.description] }), _jsx(Button, { className: "w-full bg-blue-600 hover:bg-blue-700", children: "Buy Now" })] })] }, product.id)); }) })] }));
};
export default ProductList;
