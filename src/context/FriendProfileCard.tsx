import * as React from 'react';
import { User } from "../types/User";

interface UserProfileCardProps {
    friend: User;
}

const FriendProfileCard: React.FC<UserProfileCardProps> = ({ friend }) => {
    return (
        <div className="friend-card p-3">
            <div className="card-body d-flex align-items-start">
                <img
                    src={friend.pfp}
                    alt={`${friend.displayName}'s profile picture`}
                    className="rounded-circle me-3"
                    width="75"
                    height="75"
                />
                <div className="flex-grow-1">
                    <h4 className="card-title mb-1">{friend.displayName}</h4>
                    <p className="mb-2">@{friend.username}</p>
                </div>
            </div>
        </div>
    );
};

export default FriendProfileCard;