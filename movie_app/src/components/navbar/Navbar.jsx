import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../authContext/AuthActions';
import { AuthContext } from '../../authContext/AuthContext';
import "./Navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch}=useContext(AuthContext)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled)
    return (
        <div className={isScrolled ? "Navbar scrolled" : "Navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <Link to="/" className="Link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/Series" className="Link">
                        <span  className="navbarmainLinks">Series</span>
                    </Link>
                    <Link to="/movies" className="Link">
                        <span  className="navbarmainLinks">Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Setting</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
