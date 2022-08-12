import React, { Component } from 'react'
import instagram from "./images/instagram.png"
import github from "./images/github2.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter2.png"
import './Info.css'


export default class Info extends Component {
    render() {
        return (
            <div>
                <div className='container mt-3'>
                   <h4> <div className='Info-heading'>Info</div></h4>
                    
                    <div className='info-details address-container'>
                        <div className='info-heading'>Address:</div>
                        <div className='info-detail'>Address of the street</div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42645.498453444416!2d-71.21598702233548!3d42.34561011064557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37987c10898b7%3A0xe962908a2cfccccc!2sFolsom%20Ave%2C%20Boston%2C%20MA%2002120%2C%20USA!5e0!3m2!1sen!2sin!4v1660270866653!5m2!1sen!2sin"
                     style={{ width:"400" ,  height:"300" ,  style:"border:0;" ,  allowfullscreen:"" ,  loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade" }} title="MyMap"></iframe>
                    
                    <div className='info-details'>
                        <div className='info-heading'>Email Address:</div>
                        <div className='infor-detail'>Email address of the user</div>
                    </div>

                    <div className='info-details'>
                        <div className='info-heading'>Mobile:</div>
                        <div className='info-detail'>Mobile number</div>
                    </div>
                    <div className='info-details'>
                        <div className='info-heading'>Birth Date:</div>
                        <div className='info-detail'>Date of Birth</div>
                    </div>

                    <hr />
                    
                    <div className="social">Social:</div>
                    <div className='socials-container'>
                        <div className='socials'>
                            <img className="socials-img" src={instagram} alt="instagram" />
                            <div className='socials-link'>instagram.com/example</div>
                        </div>
                        <div className='socials'>
                            <img className="socials-img" src={twitter} alt="twitter" />
                            <div className='socials-link'>instagram.com/example</div>
                        </div>
                        <div className='socials'>
                            <img className="socials-img" src={facebook} alt="facebook" />
                            <div className='socials-link'>instagram.com/example</div>
                        </div>
                        <div className='socials'>
                            <img className="socials-img" src={github} alt="github" />
                            <div className='socials-link'>instagram.com/example</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
