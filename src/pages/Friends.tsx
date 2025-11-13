import { Link, Outlet } from "react-router-dom";
import {friend1, friend2, friend3, friend4, friend5, User} from "../types/User.js";
import FriendCard from "../context/FriendCard.js";


const friends :User[] = [friend1, friend2, friend3, friend4, friend5];

function Friends(){
    return (
        <div className="container-fluid">
            <div className="row">
                <aside className="col-md-4 col-lg-3 border-end py-3">
                    <h2 className="boxFriends mb-3 section-title">Friends</h2>
                    <ul className="list-unstyled mb-0">
                        {friends.map((friend :User) => (
                            <li key={friend.id} className="mb-3">
                                <Link
                                    to={friend.username}
                                    state={{ friend }}
                                    className="text-decoration-none d-block"
                                >
                                    <FriendCard friend={friend} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="col-md-8 col-lg-9 py-3">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Friends