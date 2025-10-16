import React, { useState } from 'react'

const Products = () => {
    const [form, setMyForm] = useState({
        pname: '',
        date: '',
        desc: '',
        status: '1'
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMyForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setTimeout(() => {
            setMyForm({
                pname: '',
                date: '',
                desc: '',
                status: ''
            })
        }, 1000)
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='card mt-2'>
                    <div className='card-header text-end'>
                        <button type='button' className='btn btn-info'>Add</button>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='row'>
                                <div className='col-sm-2'>
                                    <label className='form-label'>Enter Name</label>
                                    <input className='form-control' type="text" placeholder='Enter Name' name='pname' value={form.pname} onChange={handleInputChange} />
                                </div>
                                <div className='col-sm-2'>
                                    <label className='form-label'>date</label>
                                    <input className='form-control' type="date" placeholder='Enter date' name='date' value={form.date} onChange={handleInputChange} />
                                </div>
                                <div className='col-sm-2'>
                                    <label className='form-label'>Description</label>
                                    <input className='form-control' type="text" placeholder='Enter description' name='desc' value={form.desc} onChange={handleInputChange} />
                                </div>
                                <div className='col-sm-2'>
                                    <label className='form-label'>Status</label>
                                    <select className='form-select' name='status' value={form.status} onChange={handleInputChange}>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className='text-end mt-2'>
                                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
