import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <div>
                <div className='container mt-3'>
                    <p className='lead'><b>Account Data</b></p>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="ChandlerBing" />
                    </div>
                    <div className="mb-2">
                        <input type="mail" className="form-control" placeholder="Chandler.info@yourdomain.com" />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <p className='lead'><b>Change Password</b></p>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Current Password" />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="New Password" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Confirm New Password" />
                    </div>
                    <div className="container-fluid ">
                        <form >
                            <button type="button" className="btn btn-outline-primary mx-2">Update</button>
                            <button type="button" className="btn btn-outline-primary ">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
