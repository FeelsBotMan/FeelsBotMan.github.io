import { jsx as _jsx } from "react/jsx-runtime";
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import '../assets/styles/pages/error.css';
import ErrorPage from './common/ErrorPage';
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
    return (_jsx(ErrorPage, { title: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.", message: errorMessage }));
}
