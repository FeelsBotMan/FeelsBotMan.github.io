import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
var ForgotPassword = function () {
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(false), isSubmitted = _b[0], setIsSubmitted = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // TODO: 비밀번호 재설정 이메일 발송 로직
        setIsSubmitted(true);
    };
    return (_jsx("div", { className: "forgot-password-container", children: _jsx("div", { className: "forgot-password-card", children: !isSubmitted ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "forgot-password-header", children: [_jsx("h1", { children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30" }), _jsx("p", { children: "\uAC00\uC785\uD558\uC2E0 \uC774\uBA54\uC77C\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "forgot-password-form", children: [_jsx("div", { className: "form-group", children: _jsxs("div", { className: "input-wrapper", children: [_jsx(Mail, { className: "input-icon" }), _jsx("input", { type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: "\uC774\uBA54\uC77C \uC8FC\uC18C", required: true, className: "form-input" })] }) }), _jsx("button", { type: "submit", className: "submit-button", children: "\uC7AC\uC124\uC815 \uB9C1\uD06C \uBC1B\uAE30" }), _jsxs(Link, { to: "/login", className: "back-to-login", children: [_jsx(ArrowLeft, { size: 16 }), "\uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30"] })] })] })) : (_jsxs("div", { className: "success-message", children: [_jsx("div", { className: "success-icon", children: "\u2713" }), _jsx("h2", { children: "\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694" }), _jsxs("p", { children: [email, "\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBC1C\uC1A1\uD588\uC2B5\uB2C8\uB2E4.", _jsx("br", {}), "\uC774\uBA54\uC77C\uC774 \uB3C4\uCC29\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC2A4\uD338\uD568\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694."] }), _jsx(Link, { to: "/login", className: "back-to-login-button", children: "\uB85C\uADF8\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" })] })) }) }));
};
export default ForgotPassword;
