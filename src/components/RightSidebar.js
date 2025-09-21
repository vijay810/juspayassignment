import React from 'react';
import '../style/Rightsidebar.css';
const RightSidebar = () => {
    return (
        <>
            <div className='notification'>
                <p className='pt-2 heading'>Notifications</p>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/IconOne.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>You have a bug that needs...</p>
                        <p className='mb-0 down-text'>Just Now</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Icontwo.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>New user registered</p>
                        <p className='mb-0 down-text'>59 Minutes ago</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/IconOne.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>You have a bug that needs...</p>
                        <p className='mb-0 down-text'>12 hours ago</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/IconThree.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Andi Lane subscribed toyou</p>
                        <p className='mb-0 down-text'>Today, 11:59 AM</p>
                    </div>
                </div>
            </div>
            <div className='activities'>
                <p className='pt-2 heading'>Activities</p>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person1.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>You have a bug that needs...</p>
                        <p className='mb-0 down-text'>Just Now</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person2.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Released a new version</p>
                        <p className='mb-0 down-text'>59 Minutes ago</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person3.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Submitted a bug</p>
                        <p className='mb-0 down-text'>12 hours ago</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person4.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Modified a data in page X</p>
                        <p className='mb-0 down-text'>Today, 11:59 AM</p>
                    </div>
                </div>
                 <div className='d-flex right-sidebar mb-1'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person5.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Deleted a page in project X</p>
                        <p className='mb-0 down-text'>Feb 2, 2023</p>
                    </div>
                </div>
            </div>
            <div className='contacts'>
                <p className='pt-2 heading'>Contacts</p>
                <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person6.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Natali Craig</p>
                    </div>
                </div>
                <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person7.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Drew Cano</p>
                    </div>
                </div>
                 <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person8.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Oriando Diggs</p>
                    </div>
                </div>
                 <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person9.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Andi Lone</p>
                    </div>
                </div>
                  <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person10.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Kale Marrisan</p>
                    </div>
                </div>
                  <div className='d-flex right-sidebar mb-2 align-items-center'>
                    <div className='right-sidebar-logo'>
                        <img src="../assets/images/rightsidebar/Person11.png" alt="" />
                    </div>
                    <div className='content ps-1'>
                        <p className='mb-0'>Karay Okumus</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSidebar;
