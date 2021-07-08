import React from 'react';
import logo from './../assets/ss25.png';
import {RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiPinterestFill} from "react-icons/ri";

function Contact() {
    const [header] = React.useState( {
        heading: "Contact",
        about: " ,mncjlasdknjclsdkvmjldf  vndflvknldf  mnvdflkvmld.f nlkmdfvld "
    }) 

    return (
        <div className="contact">
            <div className="common">
                
                <h1 className="main_header">
                    <div>
                        <img className="logo" src={logo} alt=""/>
                    </div>
                    {header.heading}
                </h1>    
                    <div className="contactSection">{header.about}</div>
                    <div className="contactCircles">
                        <ul className="header_ul contact-logo">
                            <li><RiInstagramFill/></li>
                            <li><RiLinkedinBoxFill/></li>
                            <li><RiGithubFill/></li>  
                            <li><RiPinterestFill/></li> 
                        </ul> 
                    </div>
            </div>  
            <div className="container">
                <div className="contact-name">
                    <input className="name" type="text" placeholder="Your Name"/>
                    <input className="name" type="text" placeholder="Your Email"/>
                </div>

                <div className="contact-subject">
                <textarea className="name subject" type="text" placeholder="Your Subject"/>
                </div>
                
                <div className="contact-message">
                <textarea className="name subject" type="text" placeholder="Your Message"/>
                </div>
                

                <input className="submitButton" type="submit" value="Send Message"/> 
         
            </div>
        </div>
    )
}

export default Contact