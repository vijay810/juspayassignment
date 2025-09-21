import React, { useState } from 'react';
import '../style/Leftsidebar.css';
import { Link } from "react-router-dom";
const LeftSidebar = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [openPagesIndex, setOpenPagesIndex] = useState(null);

    const dashboardLinks = [
        {
            title: 'Default',
            image: '../assets/images/leftsidebar/Icons/Default.png',
            sub: [
                { name: 'Order List', path: '/orders' },
                { name: 'sub link2', path: '/sub2' },
                { name: 'sub link3', path: '/sub3' },
                { name: 'sub link4', path: '/sub4' }
            ]
        },
        {
            title: 'eCommerce',
            image: '../assets/images/leftsidebar/Icons/eCommerce.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        },
        {
            title: 'Projects',
            image: '../assets/images/leftsidebar/Icons/Projects.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        },
        {
            title: 'Online Courses',
            image: '../assets/images/leftsidebar/Icons/Courses.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        }
    ];
    const pagesLinks = [
        {
            title: 'User Profile',
            image: '../assets/images/leftsidebar/Icons/Profile.png',
            sub: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
        },
        {
            title: 'Account',
            image: '../assets/images/leftsidebar/Icons/Account.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        },
        {
            title: 'Corporate',
            image: '../assets/images/leftsidebar/Icons/Corporate.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        },
        {
            title: 'Blog',
            image: '../assets/images/leftsidebar/Icons/Blog.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        },
        {
            title: 'Social',
            image: '../assets/images/leftsidebar/Icons/Social.png',
            sub: ['Sub 1', 'Sub 2', 'Sub 3']
        }
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const Dropdownpages = (index) => {
        setOpenPagesIndex(openPagesIndex === index ? null : index);
    };

    return (
        <div>
            <div className='profile'>
                <div className='profile-img'>
                    <img src="../assets/images/profileImg.png" alt="Profile" />
                </div>
                <div>
                    <p className='mb-0 pb-0'>BeyWind</p>
                </div>
            </div>
            <div className='my-2'>
                <div className='d-flex justify-content-between'>
                    <p className='mb-0 tab'>Favorites</p>
                    <p className='mb-0 tab'>Recent</p>
                </div>
                <ul className='mb-0 px-4'>
                    <li><p className='mb-0'>Overview</p></li>
                    <li><p className='mb-0'>Projects</p></li>
                </ul>
            </div>
            <div className='menu-links'>
                <div className='side-menu'>
                    <div className='left-bar'></div>
                    <p className='mb-0 tab'>Dashboard</p>
                </div>

                <div>
                    {dashboardLinks.map((item, index) => (
                        <div className="dropdown-links" key={index}>
                            <div
                                className="d-flex dropdown-header"
                                onClick={() => toggleDropdown(index)}
                            >
                                <div className={`arrow ${openIndex === index ? 'down' : ''}`}> &#x276F; </div>
                                <img src={item.image} alt={`${item.title}-logo`} />
                                <span>{item.title}</span>
                            </div>
                            {/* <ul className={`sub-menu ${openIndex === index ? 'open' : ''}`}>
                                {item.sub.map((subItem, subIndex) => (
                                    <li key={subIndex}>{subItem}</li>
                                ))}
                            </ul> */}
                            <ul className={`sub-menu ${openIndex === index ? 'open' : ''}`}>
                                {item.sub.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link to={subItem.path}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
            <div className='menu-links'>
                <div className='side-menu'>
                    <div className='left-bar'></div>
                    <a href="!#"><p className='mb-0 tab'>Pages</p></a>
                </div>

                <div>
                    {pagesLinks.map((item, index) => (
                        <div className="dropdown-links" key={index}>
                            <div
                                className="d-flex dropdown-header"
                                onClick={() => Dropdownpages(index)}
                            >
                                <div className={`arrow ${openPagesIndex === index ? 'down' : ''}`}>&#x276F;</div>
                                <img src={item.image} alt={`${item.title}-logo`} />
                                <span>{item.title}</span>
                            </div>
                            <ul className={`sub-menu ${openPagesIndex === index ? 'open' : ''}`}>
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
