import {friend1, friend2, friend3, friend4, friend5} from "../types/User.js";
import FriendProfileCard from "../context/FriendProfileCard.js";


function Friends(){
    return (
        <div className="page">

            <div className="page-content">
                <div className="container mt-3">
                    <div className="mb-3">
                        <h3>Your Friends!</h3>

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <FriendProfileCard user={friend1} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <FriendProfileCard user={friend2} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <FriendProfileCard user={friend3} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <FriendProfileCard user={friend4} />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <FriendProfileCard user={friend5} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Friends