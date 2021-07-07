import React from 'react';
import logo from './../assets/ss25.png';
import {RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiPinterestFill} from "react-icons/ri";

function Contact() {
    const [header] = React.useState( {
        heading: "Contact ",
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
        </div>
    )
}

export default Contact