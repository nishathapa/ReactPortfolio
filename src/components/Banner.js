import React from 'react';
import {RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiPinterestFill} from "react-icons/ri";

const Banner = () => {

    const [state] = React.useState({
        title: "I am Nisha Thapa",
        text: 'I am Nisha, professional web developer with long time experience in this field' 
    })
    return (
        <header className="header">
            <div className="container">
                <div className="col-6">
                    <div>
                        <div className="header_content">
                            <div className="header_section">
                                <ul className="header_ul">
                                    <li><RiInstagramFill/></li>
                                    <li><RiLinkedinBoxFill/></li>
                                    <li><RiGithubFill/></li>  
                                    <li><RiPinterestFill/></li>  
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
