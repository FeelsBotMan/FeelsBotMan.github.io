import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Checkout = function (_a) {
    //const navigate = useNavigate();
    var _b;
    var _c = _a.cartItems, cartItems = _c === void 0 ? [] : _c, _d = _a.totalAmount, totalAmount = _d === void 0 ? 0 : _d;
    var handleSubmit = function (e) {
        e.preventDefault();
        // 결제 로직 구현
        console.log('결제 처리중...');
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto p-4", children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "\uC8FC\uBB38/\uACB0\uC81C" }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "\uC8FC\uBB38 \uC0C1\uD488" }), cartItems.map(function (item, index) {
                        var _a;
                        return (_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { children: item === null || item === void 0 ? void 0 : item.name }), _jsxs("span", { children: [(_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.toLocaleString(), "\uC6D0"] })] }, index));
                    })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "\uBC30\uC1A1 \uC815\uBCF4" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "\uBC1B\uB294 \uC0AC\uB78C" }), _jsx("input", { type: "text", className: "w-full border rounded p-2", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "\uC5F0\uB77D\uCC98" }), _jsx("input", { type: "tel", className: "w-full border rounded p-2", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "\uBC30\uC1A1\uC9C0" }), _jsx("input", { type: "text", className: "w-full border rounded p-2", required: true })] })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6 mb-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "\uACB0\uC81C \uC815\uBCF4" }), _jsxs("div", { className: "flex justify-between mb-4", children: [_jsx("span", { children: "\uCD1D \uC0C1\uD488\uAE08\uC561" }), _jsxs("span", { children: [totalAmount === null || totalAmount === void 0 ? void 0 : totalAmount.toLocaleString(), "\uC6D0"] })] }), _jsxs("div", { className: "flex justify-between mb-4", children: [_jsx("span", { children: "\uBC30\uC1A1\uBE44" }), _jsx("span", { children: "3,000\uC6D0" })] }), _jsxs("div", { className: "flex justify-between font-bold", children: [_jsx("span", { children: "\uCD5C\uC885 \uACB0\uC81C\uAE08\uC561" }), _jsxs("span", { children: [(_b = (totalAmount + 3000)) === null || _b === void 0 ? void 0 : _b.toLocaleString(), "\uC6D0"] })] })] }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700", children: "\uACB0\uC81C\uD558\uAE30" })] })] }));
};
export default Checkout;
