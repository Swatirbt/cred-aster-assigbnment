import React, { Component } from 'react'



export default class Basic extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <p className='lead'><b>Basic Information</b></p>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className='mb-2'>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" checked />Male
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" />Female
                    </span>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text"><img src="https://www.freeiconspng.com/thumbs/calendar-icon-png/calendar-icon-png--0.png" alt="calender" width={20}/></span>
                    <input type="text" className="form-control" placeholder='Birthdate' />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="http://" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Address Line 1" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Address Line 2" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="State/Province" />
                </div>
                <select className="form-select mb-2">
                    <option selected>-- Select Country --</option>
                    <option value="1">India</option>
                    <option value="2">Usa</option>
                    <option value="3">Australia</option>
                    <option value="3">UK</option>
                    <option value="3">Germany</option>
                </select>
                <div className="container-fluid">
                    <form >
                        <button type="button" className="btn btn-outline-primary mx-2">Update</button>
                        <button type="button" className="btn btn-outline-primary ">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
