import React , { useState } from 'react';
import logo from '../../images/map.svg';
import menu from '../../images/menu.svg';
import cancel from '../../images/cancel.svg';

import './header.styles.css';

const Header = () => {
    var [ clicked , setIsClicked ] = useState(false);
    return(
    <div className="navbar">
        <img className="logo" alt="logo" src={logo}></img>
        <img className="menu" alt="menu" src={clicked ? cancel : menu } onClick={() => setIsClicked(!clicked)}></img>
    </div>
)}

export default Header;