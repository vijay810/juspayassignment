import React, { useState, useEffect } from 'react'
import '../style/Dashboard.css'

const Dashboard = () => {
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
            {loader && <div className="loader">
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}
            {!loader &&
                <div className='container-fluid'>
                    <div>
                        <p className='mb-0 py-2 tab'>eCommerce</p>
                        <div className='row mx-0 mb-3'>
                            <div className='col-sm-6 px-0'>
                                <div className='row mx-0'>
                                    <div className='col-sm-6 p-1'>
                                        <div className='border card-box border-1 rounded-4 p-3'>
                                            <p className='mb-2 card-label'>Customers</p>
                                            <div className='d-flex justify-content-between '>
                                                <h5>3,781</h5>
                                                <div className='d-flex align-items-center gap-1'><p className='mb-0'>+11.78</p> <img src="../assets/images/highIcon.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 p-1'>
                                        <div className='card-box border border-1 rounded-4 p-3'>
                                            <p className='mb-2 card-label'>Orders</p>
                                            <div className='d-flex justify-content-between'>
                                                <h5>1,219</h5>
                                                <div className='d-flex align-items-center gap-1'><p className='mb-0'>-0.03</p> <img src="../assets/images/lowIcon.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 p-1'>
                                        <div className='card-box border border-1 rounded-4 p-3'>
                                            <p className='mb-2 card-label'>Revenue</p>
                                            <div className='d-flex justify-content-between'>
                                                <h5>$695</h5>
                                                <div className='d-flex align-items-center gap-1'><p className='mb-0'>+15.03</p> <img src="../assets/images/highIcon.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 p-1'>
                                        <div className='card-box border border-1 rounded-4 p-3'>
                                            <p className='mb-2 card-label'>Growth</p>
                                            <div className='d-flex justify-content-between'>
                                                <h5>30.1%</h5>
                                                <div className='d-flex align-items-center gap-1'><p className='mb-0'>+6.08</p> <img src="../assets/images/highIcon.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 p-1'>
                                <div className='barchart-container h-100'>
                                    <p className='mb-0 p-2 heading'>Projections vs Actuals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row mx-0'>
                            <div className='col-sm-9 p-1'>
                                <div className='linechart-container d-flex gap-2'>
                                    <p className='mb-0 p-2 heading'>Revenu</p><span className='p-2'>/</span>

                                </div>
                            </div>
                            <div className='col-sm-3 p-1'>
                                <div className='map-container '>
                                    <p className='mb-0 p-2 heading'>Revenu by Location</p>
                                    <div className='map'>
                                        <img src="../assets/images/map.png" alt="" />
                                    </div>
                                    <div className='px-3 pb-3'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0'>New York</p>
                                            <p className='mb-0'>72K</p>
                                        </div>
                                        <div className="progress" role="progressbar" style={{ height: '2px' }}>
                                            <div className="progress-bar bg-secondary" style={{ width: '72%' }}></div>
                                        </div>
                                    </div>
                                    <div className='px-3 pb-3'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0'>San Francisco</p>
                                            <p className='mb-0'>39K</p>
                                        </div>
                                        <div className="progress" role="progressbar" style={{ height: '2px' }}>
                                            <div className="progress-bar bg-secondary" style={{ width: '39%' }}></div>
                                        </div>
                                    </div>
                                    <div className='px-3 pb-3'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0'>Sydney</p>
                                            <p className='mb-0'>25K</p>
                                        </div>
                                        <div className="progress" role="progressbar" style={{ height: '2px' }}>
                                            <div className="progress-bar bg-secondary" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div className='px-3 pb-3'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='mb-0'>Singapure</p>
                                            <p className='mb-0'>61K</p>
                                        </div>
                                        <div className="progress" role="progressbar" style={{ height: '2px' }}>
                                            <div className="progress-bar bg-secondary" style={{ width: '61%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row mx-0'>
                            <div className='col-sm-9 p-1'>
                                <div className='products-list'>
                                    <p className='mb-0 p-2 heading'>Top Selling Products</p>
                                    <div className="table-scroll">
                                        <table className="table table-transparent mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className='product-name'>ASOS Ridley High Waist</th>
                                                    <td>$79.49</td>
                                                    <td>82</td>
                                                    <td>$6,518.18</td>
                                                </tr>
                                                <tr>
                                                    <th className="product-name">Marco Lightweight Shirt</th>
                                                    <td>$128.50</td>
                                                    <td>37</td>
                                                    <td>$4,754.50</td>
                                                </tr>
                                                <tr>
                                                    <th className="product-name">Half Sleeve Shirt</th>
                                                    <td>$39.99</td>
                                                    <td>64</td>
                                                    <td>$2,559.36</td>
                                                </tr>
                                                <tr>
                                                    <th className="product-name">Lightweight Jacket</th>
                                                    <td>$20.00</td>
                                                    <td>184</td>
                                                    <td>$3,680.00</td>
                                                </tr>
                                                <tr>
                                                    <th className="product-name">Marco Shoes</th>
                                                    <td>$79.49</td>
                                                    <td>64</td>
                                                    <td>$1,965.81</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                            </div>
                            <div className='col-sm-3 p-1'>
                                <div className='pai-container '>
                                    <p className='mb-0 p-2 heading'>Total Sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard
