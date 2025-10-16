import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../style/Header.css';
import { PiSidebarDuotone } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { BsBrightnessHigh } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { RxCountdownTimer } from "react-icons/rx";

const Header = ({ toggleLeft, toggleRight, toggleTheme }) => {
    const location = useLocation();

    // Get the current route segment
    const path = location.pathname;
    const pathSegment = path !== '/' ? path.split('/').pop() : '';

    // Format the segment to be readable
    const formattedSegment = pathSegment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <nav className="navbar navbar-expand-lg px-2 border border-1">
            <div className='d-flex justify-content-between w-100'>
                <div className='d-flex gap align-items-center'>
                    <div className='pointer d-flex gap align-items-center' onClick={toggleLeft}>
                        {/* <img src='../assets/images/Sidebar.png' alt='left-sidebar' /> */}
                        <PiSidebarDuotone size={18} />
                        <FaRegStar size={18} />
                    </div>

                    {/* Breadcrumb */}
                    <div className="d-flex align-items-center gap">
                        <p className='mb-0 tab'>
                            <Link to="/">Dashboard</Link>
                        </p>
                        {path !== '/' && (
                            <>
                                <span className="mx-1">/</span>
                                <p className='mb-0'>{formattedSegment}</p>
                            </>
                        )}
                    </div>
                </div>

                <div className='d-flex gap align-items-center'>
                    {/* Search Box */}
                    <div className="custom-search d-none d-sm-block">
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

                    <div className='notification pointer d-flex gap align-items-center' onClick={toggleTheme}>
                        {/* <img src="../assets/images/brightness.png" alt="toggle theme" /> */}
                        <BsBrightnessHigh size={18} />
                        <RxCountdownTimer size={18} />
                        < GoBell size={18} />
                    </div>

                    <div className='pointer d-flex gap align-items-center' onClick={toggleRight}>
                        {/* <img src='../assets/images/Sidebar.png' alt='right-sidebar' /> */}
                        <PiSidebarDuotone size={18} style={{ transform: 'scaleX(-1)' }} />

                    </div>
                </div>
            </div>

            {/* Mobile search input */}
            <div className='d-flex justify-content-center d-block d-sm-none'>
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
            </div>
        </nav>
    );
};

export default Header;
