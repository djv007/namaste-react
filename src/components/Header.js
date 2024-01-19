import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const [logOutBtn, setLogOutBtn] = useState("Log In");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
            <img 
                className='logo' 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus? "Online" : "Offline"}</li>
                    <li><Link to="/grocery">Grocery</Link></li>
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
