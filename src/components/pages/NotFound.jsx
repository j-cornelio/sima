import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <div className="card mt-4">            
                <div className="card-body">
                    <h2>Page Not Found</h2>
                    <Link to="/">
                     <button>Go to Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;