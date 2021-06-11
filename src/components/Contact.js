import React from 'react'

function Contact() {
    const [header] = React.useState( {
        heading: "Contact ",
        about: " ,mncjlasdknjclsdkvmjldf  vndflvknldf  mnvdflkvmld.f nlkmdfvld "
    }) 

    return (
        <div className="contact">
            <div className="common">
                <h1 className="main_header">
                        {header.heading}
                </h1>    
                <div className="aboutSection">
                    {header.about}
                </div>
            </div>  
        </div>
    )
}

export default Contact