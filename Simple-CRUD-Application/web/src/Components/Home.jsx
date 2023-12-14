import React, { useEffect, useState } from 'react';
import '../Style/global.css'
import { userData } from '../User/user'
import '../Style/global.css'
import { isError, validator } from '../Validations/userValidation'
// import { errors } from '../Validations/errors';
import { errorMessages } from '../Utils/errorMessages';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(userData)
    const [formErrors, setFormErrors] = useState({})
    const [result, setResult] = useState('')
    const [resultClass,setResultClass] = useState("")
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const validateData = () => {
        let errors = {}
        for (const key in data) {
            if (!validator[key](data[key])) {
                errors = { ...errors, [key]: errorMessages[key] }
            }
        }
        setFormErrors(errors)
    }
    const onRegister = async (event) => {
        event.preventDefault()
        validateData()
        console.log(formErrors)
        console.log(isError(formErrors))
        if(!formErrors){
            const url = import.meta.env?.VITE_SERVER_URL
            const resp = await axios.post(url,data)
            console.log(resp)
            switch (resp.status) {
                case 200:
                    setResult("Registered Successfully")
                    setResultClass('success')
                    break;
                case 400:
                    setResult("Cannot Able to Register or Something Went Wrong")
                    setResultClass('failure')
                    break;
                case 500:
                    setResult("Something Went Wrong")
                    setResultClass('failure')
                    break;
            }
        }
    }
    return (
        <form className='student-form' onSubmit={onRegister}>
            <span className={resultClass}>{result}</span>
            <label htmlFor="" >Full Name</label>
            <input type="text" name='fullName' onChange={handleChange} value={data?.fullName} />
            <span className='error-msg' >{formErrors?.fullName}</span>
            <label htmlFor=""  >Father's Name</label>
            <input type="text" name='fname' onChange={handleChange} value={data?.fname} />
            <span className='error-msg'>{formErrors?.fname}</span>
            <label htmlFor="" >Mother's Name</label>
            <input type="text" name='mname' onChange={handleChange} value={data?.mname} />
            <span className='error-msg'>{formErrors?.mname}</span>
            <label htmlFor="">Father Mobile Number</label>
            <input type="number" name='fmobile' onChange={handleChange} value={data?.fmobile} />
            <span className='error-msg'>{formErrors?.fmobile}</span>
            <label htmlFor="" >Mother Mobile Number</label>
            <input type="number" name='mmobile' onChange={handleChange} value={data?.mmobile} />
            <span className='error-msg'>{formErrors?.mmobile}</span>
            <label htmlFor="" >Address</label>
            <input type="text" name='address' onChange={handleChange} value={data?.address} />
            <span className='error-msg'>{formErrors?.address}</span>
            <button className="register" >Register</button>
        </form>
    )
}
export default Home