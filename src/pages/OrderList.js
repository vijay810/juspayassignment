import React, { useState, useEffect } from 'react'
import '../style/Orderlist.css'
import { CiSearch } from "react-icons/ci";
const OrderList = () => {
  const [loader, setLoader] = useState('true')

  const lodingFn = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000)
  }
  useEffect(() => {
    lodingFn()
  }, [])
  return (
    <>
      {loader &&
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
      {!loader &&
        <>
          <div className='px-0'>
            <div className='p-2'>
              <p className='mb-0 py-1 tab'>Order List</p>
              <div className='p-1 top-bar mb-0'>
                <div className='gap-1 d-flex align-items-center'>
                  <img className='topbar-logo' src="../assets/images/orderlist/add.png" alt="" />
                  <img className='topbar-logo' src="../assets/images/orderlist/filter.png" alt="" />
                  <img className='topbar-logo' src="../assets/images/orderlist/order.png" alt="" />
                </div>
                <div className="search">
                  <input type="search" placeholder="Search..." />
                <div className='topbar-logo'>
                  <CiSearch />
                </div>
                  {/* <img className='topbar-logo' src="../assets/images/orderlist/search.png" alt="search icon" /> */}
                </div>
              </div>
            </div>
            <div className='table-responsive'>
              <table className="table table-transparent">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox" /></th>
                    <th scope="col">Order ID</th>
                    <th scope="col">User</th>
                    <th scope="col">Project</th>
                    <th scope="col">Address</th>
                    <th scope="col">Date</th>
                    <th scope="col" className='text-center'>status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person1.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person2.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person3.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person4.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person5.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person6.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person7.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td>#CM9801</td>
                    <td>
                      <div className='user-profile'>
                        <img src="../assets/images/orderlist/users/Person8.png" alt="" />
                        <p className='mb-0 ps-1'>Natali Craig</p>
                      </div>
                    </td>
                    <td>Landing Page</td>
                    <td>Meadow Lane Oakland</td>
                    <td>
                      <div className='date-table'>
                        <img src="../assets/images/orderlist/date.png" alt="dateIcon" />
                        <p className='mb-0 ps-1'>Just Now</p>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <ul className='px-0' style={{ marginBottom: '0px', display: 'contents' }}><li>In Progress</li></ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </>
      }
    </>
  )
}

export default OrderList
