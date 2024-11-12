import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
function App() {
    return _jsx(RouterProvider, { router: createBrowserRouter(routes) });
}
export default App;
