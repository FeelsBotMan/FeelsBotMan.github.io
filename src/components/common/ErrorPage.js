import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ErrorPage = function (_a) {
    var title = _a.title, message = _a.message, _b = _a.buttonText, buttonText = _b === void 0 ? '홈으로 돌아가기' : _b, _c = _a.onButtonClick, onButtonClick = _c === void 0 ? function () { return window.location.href = '/'; } : _c;
    return (_jsx("section", { className: "error-container", children: _jsx("div", { className: "error-content", children: _jsxs("div", { className: "error-card", children: [_jsx("div", { className: "error-icon", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }) }), _jsx("h1", { children: title }), _jsx("p", { children: message }), _jsx("button", { onClick: onButtonClick, children: buttonText })] }) }) }));
};
export default ErrorPage;
