import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
var Login = function () {
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(''), password = _b[0], setPassword = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // TODO: 로그인 로직 구현
        console.log('Login attempt:', { email: email, password: password });
    };
    return (_jsx("div", { className: "login-container", children: _jsxs("div", { className: "login-card", children: [_jsxs("div", { className: "login-header", children: [_jsx("h1", { children: "Welcome Back" }), _jsx("p", { children: "\uD0A4\uBCF4\uB4DC \uC2A4\uD1A0\uC5B4\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "login-form", children: [_jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Mail, { className: "input-icon" }), _jsx("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "\uC774\uBA54\uC77C", required: true, className: "form-input" })] }) }), _jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Lock, { className: "input-icon" }), _jsx("input", { type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: "\uBE44\uBC00\uBC88\uD638", required: true, className: "form-input" })] }) }), _jsxs("div", { className: "form-options", children: [_jsxs("label", { className: "remember-me", children: [_jsx("input", { type: "checkbox" }), _jsx("span", { children: "\uC790\uB3D9 \uB85C\uADF8\uC778" })] }), _jsx(Link, { to: "/forgot-password", className: "forgot-password", children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30" })] }), _jsxs("button", { type: "submit", className: "login-button", children: ["\uB85C\uADF8\uC778", _jsx(ArrowRight, { size: 16 })] }), _jsxs("div", { className: "social-login", children: [_jsx("span", { className: "divider", children: "\uB610\uB294" }), _jsxs("div", { className: "social-buttons", children: [_jsx("button", { type: "button", className: "social-button kakao", children: "\uCE74\uCE74\uC624\uB85C \uC2DC\uC791\uD558\uAE30" }), _jsx("button", { type: "button", className: "social-button naver", children: "\uB124\uC774\uBC84\uB85C \uC2DC\uC791\uD558\uAE30" })] })] }), _jsxs("div", { className: "signup-prompt", children: [_jsx("span", { children: "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694?" }), _jsx(Link, { to: "/signup", className: "signup-link", children: "\uD68C\uC6D0\uAC00\uC785" })] })] })] }) }));
};
export default Login;
