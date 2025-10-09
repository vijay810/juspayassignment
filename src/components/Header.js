import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../style/Header.css';

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
        <nav className="navbar navbar-expand-lg px-3 border border-1">
            <div className='d-flex justify-content-between w-100'>
                <div className='d-flex gap align-items-center'>
                    <div className='pointer' onClick={toggleLeft}>
                        <img src='../assets/images/Sidebar.png' alt='left-sidebar' />
                    </div>
                    <div>
                        <img src='../assets/images/star.png' alt='star' />
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

                    <div className='notification pointer' onClick={toggleTheme}>
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
