import React, { useState, useEffect } from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../style/Layout.css';

const LayoutPage = ({ children }) => {
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <div className="d-flex flex-column vh-100">
            <div className="d-flex flex-grow-1">
                {/* LEFT SIDEBAR */}
                {(showLeft || isMobile) && (
                    <div className={`sidebar-left border-end p-2 ${showLeft ? 'open' : ''}`}>
                        {isMobile && (
                            <button className="sidebar-close-btn" onClick={() => setShowLeft(false)}>
                                ✖
                            </button>
                        )}
                        <LeftSidebar />
                    </div>
                )}

                {/* MAIN CONTENT */}
                <div className="main-content p-0 flex-grow-1">
                    <Header
                        toggleLeft={() => setShowLeft(!showLeft)}
                        toggleRight={() => setShowRight(!showRight)}
                    />
                    <div className="p-3">{children}</div>
                </div>

                {/* RIGHT SIDEBAR */}
                {(showRight || isMobile) && (
                    <div className={`sidebar-right border-start p-2 ${showRight ? 'open' : ''}`}>
                        {isMobile && (
                            <button className="sidebar-close-btn" onClick={() => setShowRight(false)}>
                                ✖
                            </button>
                        )}
                        <RightSidebar />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LayoutPage;
