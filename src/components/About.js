import React from 'react'

function About() {
    const [aboutTitle] = React.useState({
        mainHeader: "About Me",
        text: "'Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
        bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
        hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd "
    })

    const [title] = React.useState([
        {
            id: 1,
            header: 'Name',
            info: 'Nisha Thapa'
        },{
            id: 2,
            header: 'Email',
            info: 'Nisha Thapa'
        },{
            id: 3,
            header: 'LinkedIn',
            info: 'Nisha Thapa'
        },{
            id: 4,
            header: 'Profile',
            info: 'Nisha Thapa'
        }
    ]);
    return (
        <div className="about">
            <div className="common">
                        <h1 className="main_header">{aboutTitle.mainHeader}</h1>
                        <p className="main_content">
                            {aboutTitle.text}
                        </p>
                <div className="commonBorder"></div>
            </div>
            <div className="row">
                <div className="container">
                    <h1>Hi There</h1>
                    <div className="about-info">
                    <p>Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
                    bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
                    hbvjhdfbgj bjvhdfbvgkj </p>
                    <p>Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
                    bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
                    hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr </p>
                    <p>Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
                    bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
                    hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd</p>
                    </div>

                    <div className="contact-info">
                        <div className='row'>
                            {title.map(data => (
                                <div className="col-6 info">
                                    <strong>{data.header}</strong>
                                    <p>{data.info}</p>
                                </div> 
                            ))}
                        </div>     
                    </div>
                </div>   
            </div> 
        </div>
    )
}

export default About
