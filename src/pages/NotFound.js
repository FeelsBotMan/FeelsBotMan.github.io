import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import ErrorPage from '../components/common/ErrorPage';
var NotFound = function () {
    var navigate = useNavigate();
    return (_jsx(ErrorPage, { title: "404", message: "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4", onButtonClick: function () { return navigate('/'); } }));
};
export default NotFound;
