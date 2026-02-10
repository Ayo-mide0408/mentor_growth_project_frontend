import {createBrowserRouter} from 'react-router-dom'
import Authentication from '../components/AuthenticationFlow.jsx'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Authentication />
    }
]);

export default routes;