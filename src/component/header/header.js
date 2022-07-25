import '../../App.css';
import React, { useState } from 'react';
import search from '../../assects/search.svg';
import shoppingbag from '../../assects/shoppingbag.svg';
import user from '../../assects/user.svg';
import menu from '../../assects/menu.svg';
import logo from '../../assects/logo.png';
import { useNavigate } from 'react-router-dom';
import Comp1 from './mobi-nav';

const Header = () => {
    const [showHideComp1, setShowHideComp1] = useState(false);
    const hideComponent = (e) => {
        switch (e) {
            case "showHideComp1":
                setShowHideComp1(!showHideComp1);
        }
    }
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/');
    }

    const handleClick = () => {
        navigate('/cart');
    };
    return (
        <nav className='aem-Grid'>
            <div className='aem-Grid aem-Grid--12 demo-Grid main-nav'>
                <h1 onClick={homeClick} className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator logo-image'><img src={logo} alt="here is venia logo" /></h1>
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--6 demo-GridColumn demo-GridColumn--separator list-item'>
                    <div>
                        <ul>
                            <li><a href='#'>Women</a></li>
                            <li><a href='#'>Men</a></li>
                            <li><a href='#'>Smart Gear</a></li>
                            <li><a href='#'>Accessories</a></li>
                        </ul>
                    </div>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--4 demo-GridColumn demo-GridColumn--separator list-item-icon'>
                    <ul>
                        <li><img src={search} alt="here is search bar" />search</li>
                        <li><img src={user} alt="go to log in page" />Sign in</li>
                        <li onClick={handleClick} className="cart-icon">
                            <img src={shoppingbag} alt="go to shoping cart" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mobile-nav'>
                <ul>
                    <li><button onClick={() => hideComponent("showHideComp1")}><img src={menu} alt="here is menu bar" /></button></li>
                    <li onClick={homeClick}><img src={logo}  alt ="here is home page logo"/></li>
                    <li><img src={search}  alt ="here is search bar"/></li>
                    <li onClick={handleClick}><img src={shoppingbag} alt ="go to cart-item"/></li>
                </ul>
            </div>
            <div>
                {showHideComp1 && <Comp1 />}
            </div>
        </nav>
    );
}

export default Header

