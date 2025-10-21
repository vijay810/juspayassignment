import React, { useEffect, useState } from 'react'

const Products = () => {
    const [myform, setMyform] = useState({
        pname: '',
        desc: '',
        status: '1'
    })
    const [loading, setLoading] = useState(true)
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setMyform((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(myform)
    }
    const loaderBtn = () => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }
    useEffect(() => {
        loaderBtn()
    },[])

    return (
        <>
            <div className=''>
                {loading && (
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <small>Loading</small>
                    </div>
                )}
                {!loading && (
                    <div className='card m-2 bg-transparent border border-1 border-rounded'>
                        <div className='card-header border border-bottom-1 '><p className='mb-0 p-heading'>Product Details</p></div>
                        <div className='card-body'>
                            <form>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <label className='form-label'>Enter name</label>
                                        <input type="text" className='form-control' name='pname' value={myform.pname} onChange={handleInputChange} />
                                    </div>
                                    <div className='col-sm-3'>
                                        <label className='form-label'>Description</label>
                                        <input type="text" className='form-control' name='desc' value={myform.desc} onChange={handleInputChange} />
                                    </div>
                                    <div className='col-sm-3'>
                                        <label className='form-label'>Status</label>
                                        <select className='form-select' name='status' value={myform.status} onChange={handleInputChange}>
                                            <option value={1}>Active</option>
                                            <option value={0}>InActive</option>
                                        </select>
                                    </div>
                                    <div className='py-2 text-end'>
                                        <button className='btn btn-primary' type='submit' onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Products
