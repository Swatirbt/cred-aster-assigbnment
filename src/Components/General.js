import React, { Component } from 'react'

export default class General extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <p className='Lead'><b>General Information</b></p>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <select className="form-select mb-2">
                    <option selected>-- Select Language</option>
                    <option value="1">Tamil</option>
                    <option value="2">Hindi</option>
                    <option value="3">English</option>
                    <option value="3">Kannada</option>
                    <option value="3">Gujarati</option>
                </select>
                <select className="form-select mb-2">
                    <option selected>UTC-5</option>
                </select>
                <p className=''><b>Date Format</b></p>
                <div className='mb-2'>
                    <span className="form-check form-check-inline"><input className="form-check-input" type="radio" />May 18,2018</span>
                    <span className="form-check form-check-inline"><input className="form-check-input" type="radio" />2018,May,18</span>
                    <span className="form-check form-check-inline"><input className="form-check-input" type="radio" />2018-03-10</span>
                    <span className="form-check form-check-inline"><input className="form-check-input" type="radio" />02/09/2018</span>
                    <span className="form-check form-check-inline"><input className="form-check-input" type="radio" />10/05/2018</span>
                </div>
                <p className=''><b>Email from Lucid</b></p>
                <p>I'd  like to receive the following emails:</p>
                <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox" />
                    <label className="form-check-label">Weekly Account Summary</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox" />
                    <label className="form-check-label">Compaign Reports</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox" />
                    <label className="form-check-label">Promotional news such as offers or discounts</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox" />
                    <label className="form-check-label">Tips for campaign setup,growth and client success stories</label>
                </div>
                <div className="container-fluid mt-3">
                    <form >
                        <button type="button" className="btn btn-outline-primary mx-2">Update</button>
                        <button type="button" className="btn btn-outline-primary ">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}
