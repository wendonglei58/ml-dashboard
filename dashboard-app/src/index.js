import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import {Auth0Provider} from "@auth0/auth0-react";

import App from './App';
import Profile from "./components/auth/Profile";

ReactDOM.render(
    <Auth0Provider
        audience={process.env.REACT_APP_AUTH0_AUDIENCE}
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        scope={'openid profile email'}
        redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI || window.location.origin}
        onRedirectCallback={() => {
        }}
    >
        <Router>
            <App>
                <Route key="index" exact path="/" component={DashboardPage}/>
                <Route key="explore" path="/explore" component={ExplorePage}/>
                <Route key="profile" path="/profile" component={Profile}/>
            </App>
        </Router>
    </Auth0Provider>,
    document.getElementById('root')
);
