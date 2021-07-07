 import React from 'react';
 import logo from './../assets/ss25.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-top">
                <div className="logo_nav">
                    <img className="my_logo" src={logo} alt=""/>
                </div>
                <ul className="navbar_content">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                </div>

            </div>
            
        </nav>
    )
}

export default Nav
