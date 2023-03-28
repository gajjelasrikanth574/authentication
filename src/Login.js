import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './App.css';
const Login=()=>{

    const [username,usernameupdate]=useState('')
    const [password,passwordupdate]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        sessionStorage.clear()

    },[])

       const ProceedLogin=(e)=>{
             e.preventDefault();
             if(validate()){
        //  console.log("proceed")
        fetch('http://localhost:3001/user/'+username).then((res)=>{
            return res.json()
        }).then((resp)=>{
            // console.log(resp)
            if(Object.keys(resp).length===0){
                toast.error('Invalid username')
            }else{
                if(resp.password===password){
                    toast.success('login successfully')
                    sessionStorage.setItem('username',username);
                    navigate('/')
            }else{
                toast.error('Invalid password')}
            }
        }).catch((err)=>{
            toast.error("Login Faled due to :"+err.message)
        })
    }

}
const validate=()=>{
    let result=true;
    if(username==="" || username===null){
        result=false;
        toast.warning('please Enter username')
    }
    if(password==="" || password===null){
        result=false;
        toast.warning('please enter correct password')
    }
    return result
}

    return(
    <div className='mypage'> 
        <div className='row'>
        <div className="offset-lg-3 col-lg-6" style={{marginTop:"100px"}}>
<form onSubmit={ProceedLogin} className="container">
    <div className='mycard card'>
        <div className='card-header'>
            <h2 >User Login</h2>
            </div>
            <div className='card-body'>
                <div className='form-group'>
                    <label>UserName<span className='errmsg'>*</span></label>
                    <input value={username} onChange={e=>usernameupdate(e.target.value)} className='form-control'/>

                </div>
                <div className='form-group'>
                    <label>Password<span className='errmsg'>*</span></label>
                    <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className='form-control'/>

                </div>

            </div>
            <div className='card-footer'>
                <button type="submit" className="btn btn-primary">Login</button> &nbsp; 
                <Link className='btn btn-success' to={'/register'}>New User</Link>

            </div>

    </div>

</form>

            </div>

    </div>
    </div>
    )
}
export default Login;