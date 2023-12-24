import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import toast from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[address, setAddress] = useState('')
    const[phone, setPhone] = useState('')


    const navigate = useNavigate()


    const registerUser = async(event) =>{
        event.preventDefault();
        
        let result = await fetch("http://localhost:5000/users",{
            method: 'post',
            body: JSON.stringify({name, email, password, address, phone}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        if(result){
            toast.success("Record saved succesfully")
            navigate('/list')
        }
        console.log(result)

        // console.log({name, email, password, address, phone})
    }

  return (
    <div>
        
        <h1 className='text-center my-4 fw-bold fs-4'>Sign-up Form</h1>
        <div className='container w-25'>
            <form>
                <div className="mb-3">
                    <label htmlFor="userName"  className="form-label">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" value={name} className="form-control" id="userName" />                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" />                    
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userAddress" className="form-label">Address</label>
                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} className="form-control" id="userAddress" />                    
                </div>
                <div className="mb-3">
                    <label htmlFor="userPhone" className="form-label">Phone</label>
                    <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" id="userPhone" />                    
                </div>
                
                <button onClick={registerUser} type="submit" className="btn btn-dark">Register</button>
            </form>
        </div>

    </div>
  )
}

export default Register
