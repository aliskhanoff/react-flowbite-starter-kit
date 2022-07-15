import { Router } from '@reach/router';
import { IndexPage } from './index.jsx'
import NotFoundPage from './notfound';

export const ConfigureRoutes = () => {
    return (
        <Router>
            <IndexPage path="/" />
            <NotFoundPage path="/notfound" default />
        </Router>
    )
}