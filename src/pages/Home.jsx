import { Link } from 'react-router-dom'
import TrendingBooks from '../context/TrendingBooks'
import FriendsBooks from '../context/FriendsBooks'


function Home() {
    return (
        <div className="page">
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            
                                <div className="container">
                                    <div className="row">
                                        <TrendingBooks />
                                    </div>
                                    <div className="row">
                                        <FriendsBooks />
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home