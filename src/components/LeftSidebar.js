// leftsidebar.js
import React, { useState } from 'react';
import '../style/Leftsidebar.css';
import { Link } from "react-router-dom";

const LeftSidebar = ({ onLinkClick }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [openPagesIndex, setOpenPagesIndex] = useState(null);

    const dashboardLinks = [
        {
            title: 'Default',
            image: '../assets/images/leftsidebar/Icons/Default.png',
            sub: [
                { name: 'Order List', path: '/orders' },
                { name: 'All Products', path: '/products' },
                { name: 'Sub Link 3', path: '/sub3' },
                { name: 'Sub Link 4', path: '/sub4' }
            ]
        },
        {
            title: 'eCommerce',
            image: '../assets/images/leftsidebar/Icons/eCommerce.png',
            sub: [
                { name: 'Sub 1', path: '/ecommerce/sub1' },
                { name: 'Sub 2', path: '/ecommerce/sub2' },
                { name: 'Sub 3', path: '/ecommerce/sub3' }
            ]
        },
        {
            title: 'Projects',
            image: '../assets/images/leftsidebar/Icons/Projects.png',
            sub: [
                { name: 'Sub 1', path: '/projects/sub1' },
                { name: 'Sub 2', path: '/projects/sub2' },
                { name: 'Sub 3', path: '/projects/sub3' }
            ]
        },
        {
            title: 'Online Courses',
            image: '../assets/images/leftsidebar/Icons/Courses.png',
            sub: [
                { name: 'Sub 1', path: '/courses/sub1' },
                { name: 'Sub 2', path: '/courses/sub2' },
                { name: 'Sub 3', path: '/courses/sub3' }
            ]
        }
    ];

    const pagesLinks = [
        {
            title: 'User Profile',
            image: '../assets/images/leftsidebar/Icons/Profile.png',
            sub: [
                { name: 'Overview', path: '/user/overview' },
                { name: 'Projects', path: '/user/projects' },
                { name: 'Campaigns', path: '/user/campaigns' },
                { name: 'Documents', path: '/user/documents' },
                { name: 'Followers', path: '/user/followers' }
            ]
        },
        {
            title: 'Account',
            image: '../assets/images/leftsidebar/Icons/Account.png',
            sub: [
                { name: 'Sub 1', path: '/account/sub1' },
                { name: 'Sub 2', path: '/account/sub2' },
                { name: 'Sub 3', path: '/account/sub3' }
            ]
        },
        {
            title: 'Corporate',
            image: '../assets/images/leftsidebar/Icons/Corporate.png',
            sub: [
                { name: 'Sub 1', path: '/corporate/sub1' },
                { name: 'Sub 2', path: '/corporate/sub2' },
                { name: 'Sub 3', path: '/corporate/sub3' }
            ]
        },
        {
            title: 'Blog',
            image: '../assets/images/leftsidebar/Icons/Blog.png',
            sub: [
                { name: 'Sub 1', path: '/blog/sub1' },
                { name: 'Sub 2', path: '/blog/sub2' },
                { name: 'Sub 3', path: '/blog/sub3' }
            ]
        },
        {
            title: 'Social',
            image: '../assets/images/leftsidebar/Icons/Social.png',
            sub: [
                { name: 'Sub 1', path: '/social/sub1' },
                { name: 'Sub 2', path: '/social/sub2' },
                { name: 'Sub 3', path: '/social/sub3' }
            ]
        }
    ];

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const togglePagesDropdown = (index) => {
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

            {/* Dashboard Links */}
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
                                <div className={`arrow ${openIndex === index ? 'down' : ''}`} style={{ fontSize: "smaller" }}> &#x276F; </div>
                                <img src={item.image} alt={`${item.title}-logo`} />
                                <span>{item.title}</span>
                            </div>
                            <ul className={`sub-menu ${openIndex === index ? 'open' : ''}`}>
                                {item.sub.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            to={subItem.path}
                                            onClick={() => {
                                                setOpenIndex(null);
                                                if (onLinkClick) onLinkClick(); //  Close sidebar
                                            }}
                                        >
                                            {subItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pages Links */}
            <div className='menu-links'>
                <div className='side-menu'>
                    <div className='left-bar'></div>
                    <p className='mb-0 tab'>Pages</p>
                </div>

                <div>
                    {pagesLinks.map((item, index) => (
                        <div className="dropdown-links" key={index}>
                            <div
                                className="d-flex dropdown-header"
                                onClick={() => togglePagesDropdown(index)}
                            >
                                <div className={`arrow ${openPagesIndex === index ? 'down' : ''}`} style={{ fontSize: "smaller" }}> &#x276F; </div>
                                <img src={item.image} alt={`${item.title}-logo`} />
                                <span>{item.title}</span>
                            </div>
                            <ul className={`sub-menu ${openPagesIndex === index ? 'open' : ''}`}>
                                {item.sub.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            to={subItem.path}
                                            onClick={() => {
                                                setOpenPagesIndex(null);
                                                if (onLinkClick) onLinkClick(); // Close sidebar
                                            }}
                                        >
                                            {subItem.name}
                                        </Link>
                                    </li>
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
