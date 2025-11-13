import { useParams } from "react-router-dom";

function FriendsProfile() {
    const { username } = useParams();

    return (
        <h2 className="boxFriends mb-3 section-title">{username}'s page</h2>
    );
}
export default FriendsProfile;