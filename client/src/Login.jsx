import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/login', {email , password} ).then(result => {console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }
           
        })
         
        .catch(err => console.log(err))
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className="form-group mt-4 mr-4">
            <label for="exampleInputEmail1"><strong>Email address</strong></label>
            <input type="email " className="form-control mb-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
            onChange={(e) =>setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1"><strong>Password</strong></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
            onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <br />
        <Link type="submit" to="/home" className="btn btn-primary">Login</Link>
    </form>
</div>
  )
}

export default Login
