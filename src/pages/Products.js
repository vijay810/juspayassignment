import React, { useEffect, useState } from 'react'
import '../style/Products.css'
const Products = () => {
    const [form, setMyform] = useState({
        pname: '',
        description: '',
        status: '1'
    })
    const [loading, setLoading] = useState(true)
    const [statusflag, setStatusflag] = useState(false)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyform((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    const loadingFn = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    const addBtn = () => {
        setStatusflag(false)
    }
    useEffect(() => {
        loadingFn()
    }, [])

    return (
        <>
            {loading && (<div className='d-flex justify-content-center align-items-center vh-100'>
                <p>Loading....</p>
            </div>)}
            {!loading && (<div className='card m-3 border border-1'>
                <div className='card-header border-bottom border-1 text-end py-1 px-2'>
                    <button className='btn btn-info' type='button' onClick={addBtn}>ADD</button>
                </div>
                <form>
                    <div className='row mx-0'>
                        <div className='col-sm-2'>
                            <label className='form-label mb-1'>Enter Product Name</label>
                            <input className='form-control' type="text" name="pname" value={form.pname} onChange={handleInputChange} />
                        </div>
                        <div className='col-sm-2'>
                            <label className='form-label mb-1'>Description</label>
                            <input className='form-control' type="text" name="description" value={form.description} onChange={handleInputChange} />
                        </div>
                        {statusflag && (<div className='col-sm-2'>
                            <label className='form-label mb-1'>Status</label>
                            <select className='form-select' type="select" name="status" value={form.status} onChange={handleInputChange}>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                            </select>
                        </div>)}
                    </div>
                    <div className='text-end p-2'>
                        <button className='btn btn-primary' type='submit' onClick={handlesubmit}>Submit</button>
                    </div>
                </form >
            </div>)}
        </>
    )
}

export default Products
