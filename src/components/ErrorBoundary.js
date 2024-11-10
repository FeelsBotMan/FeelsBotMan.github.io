import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import '../assets/styles/pages/error.css';
export default function ErrorBoundary() {
    var _a;
    var error = useRouteError();
    var errorMessage;
    if (isRouteErrorResponse(error)) {
        // 라우트 관련 에러일 경우
        errorMessage = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message) || '페이지를 찾을 수 없습니다.';
    }
    else if (error instanceof Error) {
        // 일반적인 Error 객체일 경우
        errorMessage = error.message;
    }
    else if (typeof error === 'string') {
        // 문자열 에러일 경우
        errorMessage = error;
    }
    else {
        // 기타 경우
        errorMessage = '알 수 없는 오류가 발생했습니다.';
    }
    var ErrorSection = function () {
        return (_jsx("section", { className: "error-container", children: _jsx("div", { className: "error-content", children: _jsxs("div", { className: "error-card", children: [_jsx("div", { className: "error-icon", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }) }), _jsx("h1", { children: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." }), _jsx("p", { children: errorMessage }), _jsx("button", { onClick: function () { return window.location.href = '/'; }, children: "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" })] }) }) }));
    };
    return (_jsx(ErrorSection, {}));
}
