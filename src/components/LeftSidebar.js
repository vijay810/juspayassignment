import React, { useState } from 'react';
import '../style/Leftsidebar.css'
const LeftSidebar = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const dropdowns = [
        { title: 'Default 1', sub: ['Sub 1', 'Sub 2', 'Sub 3'] },
        { title: 'Default 2', sub: ['Sub 1', 'Sub 2', 'Sub 3'] },
        { title: 'Default 3', sub: ['Sub 1', 'Sub 2', 'Sub 3'] },
        { title: 'Default 4', sub: ['Sub 1', 'Sub 2', 'Sub 3'] },
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className='profile'>
                <div className='profile-img'>
                    <img src="../assets/images/profileImg.png" alt="" />
                </div>
                <div>
                    <p className='mb-0 pb-0'>BeyWind</p>
                </div>
            </div>
            <div>
                <ul className="list-group custom-list">
                    <li className="list-group-item">
                        <div className='d-flex justify-content-between'>
                            <p className='mb-0'>Lorem kd</p>
                            <p className='mb-0'>Lorem kd</p>
                        </div>
                    </li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
            </div>
            <div className='menu-links'>
                <div className='side-menu my-2'>
                    <div className='left-bar'></div>
                    <a href="!#"><p className='mb-0'>Dashboard</p></a>
                </div>

                <div className='my-2'>
                    {dropdowns.map((item, index) => (
                        <div className="dropdown-links" key={index}>
                            <div
                                className="d-flex dropdown-header"
                                onClick={() => toggleDropdown(index)}
                            >
                                <div className={`arrow ${openIndex === index ? 'down' : ''}`}>&#x203A;</div>
                                <img src="" alt="link-logo" />
                                <span>{item.title}</span>
                            </div>
                            <ul className={`sub-menu ${openIndex === index ? 'open' : ''}`}>
                                {item.sub.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
