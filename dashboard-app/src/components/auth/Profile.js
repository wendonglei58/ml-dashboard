import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Menu} from "antd";
import Logout from "./Logout";

const Profile = () => {
    const ProfileArea = (userInfo) => {
        return (
            <div>
                <h1>Profile for {userInfo.username}</h1>

                <ul>
                    <li>Email address: {userInfo.email}</li>
                </ul>
            </div>
        )
    };

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    //
    // return (
    //     isAuthenticated && (
    //         <div>
    //             <h2>{user.name}</h2>
    //             <p>{user.email}</p>
    //         </div>
    //     )
    // );

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 0px"}}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src={"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}/>
                </div>
                <div>
                    <ProfileArea username = {user.nickname} email = {user.email}/>
                </div>
            </div>
        </div>
    )
};

export default Profile;