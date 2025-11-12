import * as React from 'react';
import { User } from "../types/User";

interface UserProfileCardProps {
    user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="card-body d-flex align-items-start">
                <img
                    src={user.pfp}
                    alt={`${user.displayName}'s profile picture`}
                    className="rounded-circle me-3"
                    width="100"
                    height="100"
                />
                <div className="flex-grow-1">
                    <h4 className="card-title mb-1">{user.displayName}</h4>
                    <p className="text-muted mb-2">@{user.username}</p>
                    <p className="card-text">{user.bio}</p>
                </div>
                <div className="ms-auto align-self-end">
                    <button className="modal-button">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCard;