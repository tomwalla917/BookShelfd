import { Link } from 'react-router-dom'


function Profile() {
    return (

        <div className="container mt-4">

            <div className="card mb-4 shadow-sm">
                <div className="card-body d-flex align-items-start">
                    <img src="https://via.placeholder.com/100" alt="Profile Picture" className="rounded-circle me-3"
                         width="100" height="100"/>

                    <div className="flex-grow-1">
                        <h4 className="card-title mb-1">John Doe</h4>
                        <p className="text-muted mb-2">@johndoe</p>
                        <p className="card-text">Short bio goes here. This is a quick summary about the user’s
                            interests, favorite genres, or background.</p>
                    </div>

                    <div className="ms-auto align-self-end">
                        <button className="btn btn-outline-primary btn-sm">Edit Profile</button>
                    </div>
                </div>
            </div>

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
