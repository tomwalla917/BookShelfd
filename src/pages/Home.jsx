import { Link } from 'react-router-dom'


function Home() {
    return (

        <div className="page">

            <div className="page-content">
                <div className="container-fluid">
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div className="boxHome">

                                <div class="container">
                                    <div class="row">
                                        <div className="book-grid">
                                            <p>Trending Books</p>
                                            
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="book-grid">
                                            <p>Books Popular With Your Friends</p>
                                        </div>
                                    </div>
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
