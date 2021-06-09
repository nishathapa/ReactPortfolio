import React from 'react';
import {RiInstagramFill, RiLinkedinBoxFill, RiGithubFill, RiPinterestFill} from "react-icons/ri";

function Services() {

    const [header] = React.useState({
        mainHeader: "SERVICES",
        subHeading: 'My Services', 
        text: 'Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd \
            jhfkesdhngkdrfjgvl,d nfbsejhgm hbfkrdhg bfjhrskg hbdfhjv \
            jkbnfkrsbjgk jbksdjrvd jkbkdjrg kjdnhgkl '
    });

    const [state] = React.useState([
        {
            id: 1,
            icons: <RiLinkedinBoxFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        },
        {
            id: 2,
            icons: <RiInstagramFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        },
        {
            id: 3,
            icons: <RiLinkedinBoxFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        },
        {
            id: 4,
            icons: <RiLinkedinBoxFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        },
        {
            id: 5,
            icons: <RiLinkedinBoxFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        },
        {
            id: 6,
            icons: <RiLinkedinBoxFill/>,
            heading: 'Web Development',
            text: ' Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd \
            bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
            hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd '
        }
    ])
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="main_header">{header.subHeading}</h1>
                        <p className="main_content">
                            {header.text}
                        </p>
                        <div className="commonBorder"></div>
                    </div>  

                    <div className="row">
                        {state.map(card => (
                                <div className="col-4">
                                <div className="services_box">
                                    {/* <RiGithubFill className="common_icon"/> */}
                                    <div className="common_icon">{card.icons}</div>
                                    <div className="service_box-header">{card.heading}</div>
                                    <div className="service_box-p">
                                   {card.text}
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Services
