import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email:email, password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)
    }

  return (
    <div className='signupform template d-flex justify-content-center align-item-center 100-w 100-vh bg-primary'>
        <div className='40-w p-5 rounded'>
    <form action="" onSubmit={submitForm}>
    <div className='mb-2'>
            <label htmlFor="fname" id="First Name"></label>
            <input type="text"name="fname" id="fnamme" autoComplete='off' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <label htmlFor="email" id="email"></label>
            <input type="text"name="email" id="email" autoComplete='off' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <label htmlFor="email" id="email"></label>
            <input type="text"name="email" id="email" autoComplete='off' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <label htmlFor="email" id="email"></label>
            <input type="password"name="password" id="password"  autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
            <input type="checkbox" className='custom-control custom-checkbox' />
            <label htmlFor='check' className='custor-input-lebel'>Remember Me</label>
        </div>

      <button type="Submit">Login</button>
     <div className='d-grid'>
     <button className="btn btn-primary">Sign in</button> 
     </div>
     <p className='text-right'>
        Forgot <a href=''>password?</a><Link to="/signup" className='mb-2'>Sign up</Link>
     </p>
    </form>
    </div>
    <div>
        {
            allEntry.map((curElem) => {
                return (
                    <div className="showDataStyles">
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
  );
};

export default Signup;