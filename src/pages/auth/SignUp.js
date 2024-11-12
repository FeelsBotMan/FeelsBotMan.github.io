var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
var SignUp = function () {
    var _a = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        agreeToTerms: false
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, type = _a.type, checked = _a.checked;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = type === 'checkbox' ? checked : value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        // TODO: 회원가입 로직 구현
        console.log('SignUp attempt:', formData);
    };
    return (_jsx("div", { className: "signup-container", children: _jsxs("div", { className: "signup-card", children: [_jsxs("div", { className: "signup-header", children: [_jsx("h1", { children: "\uD68C\uC6D0\uAC00\uC785" }), _jsx("p", { children: "\uD0A4\uBCF4\uB4DC \uC2A4\uD1A0\uC5B4\uC758 \uD68C\uC6D0\uC774 \uB418\uC5B4\uC8FC\uC138\uC694" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "signup-form", children: [_jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Mail, { className: "input-icon" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "\uC774\uBA54\uC77C", required: true, className: "form-input" })] }) }), _jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(User, { className: "input-icon" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "\uC774\uB984", required: true, className: "form-input" })] }) }), _jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Lock, { className: "input-icon" }), _jsx("input", { type: "password", name: "password", value: formData.password, onChange: handleChange, placeholder: "\uBE44\uBC00\uBC88\uD638", required: true, className: "form-input" })] }) }), _jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Lock, { className: "input-icon" }), _jsx("input", { type: "password", name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778", required: true, className: "form-input" })] }) }), _jsxs("div", { className: "terms-group", children: [_jsxs("label", { className: "terms-checkbox", children: [_jsx("input", { type: "checkbox", name: "agreeToTerms", checked: formData.agreeToTerms, onChange: handleChange }), _jsx("span", { children: "\uC774\uC6A9\uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4" })] }), _jsx(Link, { to: "/terms", className: "terms-link", children: "\uC57D\uAD00 \uBCF4\uAE30" })] }), _jsx("button", { type: "submit", className: "signup-button", disabled: !formData.agreeToTerms, children: "\uD68C\uC6D0\uAC00\uC785" }), _jsxs("div", { className: "social-signup", children: [_jsx("span", { className: "divider", children: "\uB610\uB294" }), _jsxs("div", { className: "social-buttons", children: [_jsx("button", { type: "button", className: "social-button kakao", children: "\uCE74\uCE74\uC624\uB85C \uD68C\uC6D0\uAC00\uC785" }), _jsx("button", { type: "button", className: "social-button naver", children: "\uB124\uC774\uBC84\uB85C \uD68C\uC6D0\uAC00\uC785" })] })] }), _jsxs(Link, { to: "/login", className: "back-to-login", children: [_jsx(ArrowLeft, { size: 16 }), "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694? \uB85C\uADF8\uC778\uD558\uAE30"] })] })] }) }));
};
export default SignUp;
