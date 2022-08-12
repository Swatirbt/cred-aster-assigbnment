import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar bg-light">
                    <form className="container-fluid justify-content-start">
                        <Link to="/" className="btn btn-outline-info mx-1 rounded-pill px-3">Basic</Link>
                        <Link to="/Account" className="btn btn-outline-info mx-1 rounded-pill px-3">Account</Link>
                        <Link to="/General" className="btn btn-outline-info  rounded-pill px-3">General</Link>
                    </form>
                </nav>
            </div >
        )
    }
}
