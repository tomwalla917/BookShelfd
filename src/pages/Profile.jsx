import * as React from 'react'
import UserProfileCard from '../context/UserProfileCard'
import { defaultUser } from '../types/User'
import UserBooks from '../context/BookLists'


function Profile() {


    return (

        <div className="container mt-4">

            <UserProfileCard user={defaultUser} />

            <div className="row g-4">

                <UserBooks />

            </div>
        </div>

    )
}

export default Profile
