import React from 'react';

function Blogs(){
    const [aboutTitle] = React.useState({
        mainHeader: "Latest Blogs",
        text: "'Lorem Ipsum fhvjdvjd jkhvdjrhbgvkd jnfkjdhrgkd\
        bfjdhbvjd hbjhdfbvj bvjhdbvkdj bvjhdfbvjdh hjbfxjvhf bjdhgkd\
        hbvjhdfbgj bjvhdfbvgkj bvhjkdfbkgjdr bjkbdfkvd "
    })
    return (
        <div className="blogs">
            <div className="common">
                        <h1 className="main_header">{aboutTitle.mainHeader}</h1>
                        <p className="main_content">
                            {aboutTitle.text}
                        </p>
                <div className="commonBorder"></div>
            </div>
        </div>
    )
}

export default Blogs