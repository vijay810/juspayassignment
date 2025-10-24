// layout.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../style/Layout.css';
import { RxCross1 } from "react-icons/rx";

const LayoutPage = ({ children }) => {
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setShowLeft(false);
                setShowRight(false);
                setIsMobile(true);
            } else {
                setShowLeft(true);
                setShowRight(true);
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // NEW: Function to close sidebar after navigation
    const handleSidebarClose = () => {
        if (isMobile) setShowLeft(false);
    };

    return (
        <div className={`layout-wrapper ${theme}-theme d-flex flex-column vh-100`}>
            <div className="d-flex flex-grow-1">

                {(showLeft || isMobile) && (
                    <div className={`sidebar-left border-end p-2 ${showLeft ? 'open' : ''}`}>
                        {isMobile && (
                            <p
                                className="sidebar-close-btn pe-2"
                                onClick={() => setShowLeft(false)}
                            >
                                <RxCross1 size={15} />
                            </p>
                        )}
                        {/* Pass the function as a prop */}
                        <LeftSidebar onLinkClick={handleSidebarClose} />
                    </div>
                )}

                <div className="main-content p-0 flex-grow-1">
                    <Header
                        toggleLeft={() => setShowLeft(!showLeft)}
                        toggleRight={() => setShowRight(!showRight)}
                        toggleTheme={toggleTheme}
                    />
                    <div>{children}</div>
                </div>

                {(showRight || isMobile) && (
                    <div className={`sidebar-right border-start p-2 ${showRight ? 'open' : ''}`}>
                        {isMobile && (
                            <p
                                className="sidebar-close-btn pe-2"
                                onClick={() => setShowRight(false)}
                            >
                                <RxCross1 size={15} />
                            </p>
                        )}
                        <RightSidebar />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LayoutPage;
