import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Userlist () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'api/action.php'; 

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
    <>
      <Header />
      <div className="card">
            <div className="card-header">            
                <div className="row">      
                    <div className="col-md-6"><b>User Data</b></div>
                    <div className="col-md-6"><b></b></div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {JSON.stringify(users, null, 2)}
                            </td>
                            <td></td><td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
      <Footer />
    </>
    )
}

export default Userlist;