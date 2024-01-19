import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const [logOutBtn, setLogOutBtn] = useState("Log In");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100 lg:bg-red-200">
            <div className="logo-container">
            <img 
                className='w-56' 
                src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>Online Status : {onlineStatus? "Online" : "Offline"}</li>
                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About</Link></li>
                    <li className='px-4'><Link to="/contact">Contact us</Link></li>
                    <li className='px-4'>Cart</li>
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
