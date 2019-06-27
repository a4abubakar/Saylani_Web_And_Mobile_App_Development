import React from 'react';
import '../Home.css'
import Dashboard from '../Dashboard/User/Home'

export default function LoginNavigations() {
    return (
        <Router>
            <div className="navbar">
                <Link to="/logout">LogOut</Link>
            </div>
            <div>
                <Route exact path="/" component={Home} />
                {/* <Route path="/logout" component={User} /> */}
                <Route path="/restaurant" component={Restaurant} />
                <Route path="/dashboard" component={Dashboard}/>
            </div>
        </Router>
    )
}