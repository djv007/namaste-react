import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';


const Header = () => {
    const [logOutBtn, setLogOutBtn] = useState("Log In");

    return (
        <div className="header">
            <div className="logo-container">
            <img 
                className='logo' 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={()=> {
                        logOutBtn === "Log In"?setLogOutBtn("Log Out"):setLogOutBtn("Log In");
                    }}>
                        {logOutBtn}
                    </button>

                </ul>
            </div>
        </div>
    )
}

export default Header;
