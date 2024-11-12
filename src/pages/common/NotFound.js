import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
var NotFound = function () {
    var navigate = useNavigate();
    return (_jsx("section", { className: "error-container", children: _jsx("div", { className: "error-content", children: _jsxs("div", { className: "error-card", children: [_jsx("div", { className: "error-icon", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }) }), _jsx("h1", { children: "404" }), _jsx("p", { children: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4" }), _jsx("button", { onClick: function () { return navigate('/'); }, children: "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" })] }) }) }));
};
export default NotFound;
