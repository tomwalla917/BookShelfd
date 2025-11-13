import {useLocation, useParams} from "react-router-dom";
import {User} from "../types/User";
import * as React from "react";
import {defaultUser} from "../types/User";
import FriendProfilePage from "./FriendProfilePage";

interface LocationState {
    friend?: User;
}

function FriendsProfile() {
    const { username } = useParams();
    const location = useLocation();
    const state = location.state as LocationState | null;
    const friendFromState = state?.friend;
    const friend =
        friendFromState ??
        defaultUser.friends.find((f) => f.username === username);


    if (!friend) {
        return <p className="text-muted">Friend not found.</p>;
    }

    return (
        <div>
            <h2 className="boxFriends mb-3 section-title">{username}'s page</h2>

            <FriendProfilePage user={friend} />
        </div>
    );
}
export default FriendsProfile;