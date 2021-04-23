import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {Layout, Menu} from 'antd';
import Logout from "./auth/Logout";

const Header = ({location}) => (
    <Layout.Header
        style={{
            padding: '0 32px',
        }}
    >
        <div
            style={{
                float: 'left',
            }}
        >
            <h2
                style={{
                    color: '#fff',
                    margin: 0,
                    marginRight: '1em',
                    display: 'inline',
                    width: 100,
                    lineHeight: '54px',
                }}
            >
                ML-Dashboard
            </h2>
        </div>
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{
                lineHeight: '64px',
            }}
        >
            <Menu.Item key="/explore">
                <Link to="/explore">Explore</Link>
            </Menu.Item>
            <Menu.Item key="/">
                <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/Profile">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <div
                style={{
                    float: 'right',
                }}
            >
                <Logout/>
            </div>

        </Menu>
    </Layout.Header>
);

export default withRouter(Header);
