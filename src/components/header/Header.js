import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../media/logo.png';
import '../header/Header.scss';

function Header() {

    const [activeMenu, setActiveMenu] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('translation') || 'eng');
    const [activeDropdown, setActiveDropdown] = useState(false);
    const location = useLocation();

    const handleContactsClick = () => {
        setActiveMenu(false);
        document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
    };

    const openDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    useEffect(() => {
        setActiveMenu(false);
        setActiveDropdown(false);
    }, [location]);

    useEffect(() => {

    }, [currentLanguage])

    useEffect(() => {
        document.body.style.overflow = activeMenu ? 'hidden' : 'auto';
    }, [activeMenu]);

    const openMenu = () => {
        setActiveMenu(prevActiveMenu => !prevActiveMenu);
    };

    const translate = (value) => {
        switch (value) {
            case 1:
                setCurrentLanguage('ukr');
                localStorage.setItem('translation', 'ukr');
                break;
            case 2:
                setCurrentLanguage('eng');
                localStorage.setItem('translation', 'eng');
                break;
            default:
                setCurrentLanguage('ukr');
                localStorage.setItem('translation', 'ukr');
        }
    };

    return (<header className="header">
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>

        <nav className={`menu ${activeMenu ? 'active' : ''}`}>
            <div>
                <Link
                    to="/"
                    className={`menu-item ${location.pathname === '/home' ? 'active' : ''}`}> {currentLanguage === 'ukr' ? 'Домашня' : 'Home'}
                </Link>
                </div>
            <div className="dropdown_item">
                <button
                    onClick={openDropdown}
                    className={`menu-item ${location.pathname === '/services' || location.pathname === '/boards' ? 'active' : ''}`}
                > <p> {currentLanguage === 'ukr' ? 'Послуги' : 'Services'} </p>
                    {!activeDropdown ?
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.61508 0.295078L0.205078 1.70508L6.20508 7.70508L12.2051 1.70508L10.7951 0.295078L6.20508 4.87508L1.61508 0.295078Z"
                              fill="#4A4F59"/>
                        </svg> :
                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.11496 7.8099L0.704956 6.3999L6.70496 0.399902L12.705 6.3999L11.295 7.8099L6.70496 3.2299L2.11496 7.8099Z"
                                  fill="#0E1421"/>
                        </svg>
                    }
                </button>
                <div className={`dropdown_content ${activeDropdown ? 'open' : ''}`}>
                    <div>
                        <Link
                            to="/services"
                            className={`menu-item ${location.pathname === '/services' ? 'active' : ''}`}
                        > {currentLanguage === 'ukr' ? 'Палети' : 'Pallets'} </Link>
                    </div>
                    <div>
                        <Link
                            to="/boards"
                            className={`menu-item ${location.pathname === '/boards' ? 'active' : ''}`}
                        > {currentLanguage === 'ukr' ? 'Дошка' : 'Boards'} </Link>
                    </div>
                </div>
            </div>
            <div className="media_dropdown_item">
                <Link
                    to="/services"
                    className={`menu-item ${location.pathname === '/services' ? 'active' : ''}`}
                > {currentLanguage === 'ukr' ? 'Палети' : 'Pallets'} </Link>
            </div>
            <div className="media_dropdown_item">
                <Link
                    to="/boards"
                    className={`menu-item ${location.pathname === '/boards' ? 'active' : ''}`}
                > {currentLanguage === 'ukr' ? 'Дошка' : 'Boards'} </Link>
            </div>
            <div>
                <Link
                    to="/info"
                    className={`menu-item ${location.pathname === '/info' ? 'active' : ''}`}
                > {currentLanguage === 'ukr' ? 'Інформація' : 'Info'} </Link></div>
            <div className="right_navigation_desktop">
                <div className="languages">
                    <button
                        value="1"
                        onClick={() => translate(1)}
                        className={currentLanguage === 'ukr' ? 'active' : ''}> UA </button>
                    <div>
                        <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" x2="1" y2="20" stroke="#DBDCDE"/>
                        </svg>
                    </div>
                    <button
                        value="2"
                        onClick={() => translate(2)}
                        className={currentLanguage === 'eng' ? 'active' : ''}> ENG </button>
                </div>
                <div className="contact_button">
                    <button onClick={handleContactsClick}> {currentLanguage === 'ukr' ? 'Контакти' : 'Contacts'} </button>
                </div>
            </div>
        </nav>

        <div className="right_navigation">
            <div className="languages">
                <button
                    value="1"
                    onClick={() => translate(1)}
                    className={currentLanguage === 'ukr' ? 'active' : ''}> UA </button>
                <div>
                    <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" x2="1" y2="20" stroke="#DBDCDE"/>
                    </svg>
                </div>
                <button value="2"
                        onClick={() => translate(2)}
                        className={currentLanguage === 'eng' ? 'active' : ''}> ENG </button>
            </div>
            <div className="contact_button">
                <button onClick={handleContactsClick}> {currentLanguage === 'ukr' ? 'Контакти' : 'Contacts'} </button>
            </div>
        </div>

        <div className={`button_mobile ${activeMenu ? 'active' : ''}`}
             onClick={openMenu}>
            <span/>
        </div>
    </header>);
}

export default Header;