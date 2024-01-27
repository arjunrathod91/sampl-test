import React, { useState } from 'react'
import axios from 'axios'

const Content = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function submit(e){
    e.preventDefault()
    axios.post('http://localhost:7000/newUser',{name,email,password})
    .then((data)=>console.log(data))
    .catch(err=>console.log(err))
  }
  return (
    <div className='body'>
        <div className='content'>
          <div className='contrast'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast2'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast3'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast4'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast4'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast4'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
          <div className='contrast4'>
          <p className="pizza">Pizza</p>
          <p className='point'>Point</p>
          </div>
        </div>
        <div className='form'>
          <form onSubmit={submit}>
            <input type="text" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" placeholder='Submit' />
          </form>
        </div>
    </div>
  )
}

export default Content
