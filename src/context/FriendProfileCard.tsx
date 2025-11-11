import * as React from 'react';
import { User } from "../types/User";

interface UserProfileCardProps {
    user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body d-flex align-items-start">
                <img
                    src={user.pfp}
                    alt={`${user.displayName}'s profile picture`}
                    className="rounded-circle me-3"
                    width="75"
                    height="75"
                />
                <div className="flex-grow-1">
                    <h4 className="card-title mb-1">{user.displayName}</h4>
                    <p className="text-muted mb-2">@{user.username}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;