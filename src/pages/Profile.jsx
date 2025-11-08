import * as React from 'react'
import UserProfileCard from '../context/UserProfileCard'
import { defaultUser } from '../types/User'


function Profile() {


    return (

        <div className="container mt-4">

            <UserProfileCard user={defaultUser} />

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Currently Reading</h5>
                            <p className="text-muted">List of books currently being read.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Finished Reading</h5>
                            <p className="text-muted">Books you’ve completed will go here.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Want to Read</h5>
                            <p className="text-muted">Books you plan to read later.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
