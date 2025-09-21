import React from 'react';
import { Link } from "react-router-dom";
const Header = ({ toggleLeft, toggleRight, toggleTheme }) => {
    return (
        <nav className="navbar navbar-expand-lg px-3 border border-1 d-flex justify-content-between">
            <div className='d-flex gap-2 align-items-center'>
                <div className='pointer' onClick={toggleLeft}>
                    <img src='../assets/images/Sidebar.png' alt='left-sidebar' />
                </div>
                <div>
                    <img src='../assets/images/star.png' alt='left-sidebar' />
                </div>
                <p className='mb-0 tab'><Link to="">Dashboard</Link></p> /
                <p className='mb-0'>Default</p>
            </div>

            <div className='d-flex gap-2 align-items-center'>

                {/* Search Box */}
                <div className="custom-search">
                    <div className="input-wrapper">
                        <div className="left-inside">
                            <img src="../assets/images/search.png" alt="icon" />
                        </div>
                        <input type="search" className="search-input" placeholder="Search" />
                        <div className="right-inside">
                            <img src="../assets/images/searchtext.png" alt="icon" />
                        </div>
                    </div>
                </div>

                {/* Brightness Icon to toggle theme */}
                <div className='notification' onClick={toggleTheme}>
                    <img src="../assets/images/brightness.png" alt="toggle theme" />
                </div>

                <div className='notification'>
                    <img src="../assets/images/timer.png" alt="timer" />
                </div>

                <div className='bell'>
                    <img src="../assets/images/bell.png" alt="bell" />
                </div>

                <div className='pointer' onClick={toggleRight}>
                    <img src='../assets/images/Sidebar.png' alt='right-sidebar' />
                </div>
            </div>
        </nav>
    );
};

export default Header;
