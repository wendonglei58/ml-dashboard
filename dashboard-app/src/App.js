import './body.css';
import 'antd/dist/antd.css';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState, useCallback } from "react";


const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: '100%',
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => {
    const [ cubejsApi, setCubejsApi ] = useState(null);

    // Get all Auth0 data
    const {
        isLoading,
        error,
        isAuthenticated,
        loginWithRedirect,
        getAccessTokenSilently,
        user
    } = useAuth0();

    // Force to work only for logged in users
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            // Redirect not logged users
            loginWithRedirect();
        }
    }, [ isAuthenticated, loginWithRedirect, isLoading ]);

    // Get Cube.js instance with accessToken
    const initCubejs = useCallback(async () => {
        const accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: 'openid profile email',
        });

        setCubejsApi(cubejs({
            apiUrl: `http://localhost:4000/cubejs-api/v1`,
            headers: { Authorization: `${accessToken}` },
        }));
    }, [ getAccessTokenSilently ]);

    // Init Cube.js instance with accessToken
    useEffect(() => {
        if (!cubejsApi && !isLoading && isAuthenticated) {
            initCubejs();
        }
    }, [ cubejsApi, initCubejs, isAuthenticated, isLoading ]);

    if (error) {
        return <span>{error.message}</span>;
    }

    // Show indicator while loading
    if (isLoading || !isAuthenticated || !cubejsApi) {
        return <span>Loading</span>;
    }

    return <CubeProvider cubejsApi={cubejsApi}>
        <ApolloProvider client={client}>
            <AppLayout>{children}</AppLayout>
        </ApolloProvider>
    </CubeProvider>;
}

export default App;
