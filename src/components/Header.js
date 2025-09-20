import React from 'react';

const Header = ({ toggleLeft, toggleRight }) => {
    return (
        <nav className="navbar navbar-expand-lg px-1 border border-1">
            <button className="btn me-2" onClick={toggleLeft}>
                <img src='../assets/images/Sidebar.png' alt='left-sidebar' />
            </button>

            <a className="navbar-brand mx-auto" href="!#">My App</a>

            <button className="btn ms-2" onClick={toggleRight}>
                <img src='../assets/images/Sidebar.png' alt='right-sidebar' />
            </button>
        </nav>
    );
};

export default Header;
