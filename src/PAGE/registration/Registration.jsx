import React from 'react'

const Registration = () => {
const handleSubmit=(e)=>{
  e.preventDefault()
const form=e.target;
const name=form.name.value;
const pin=form.pin.value;
const mobile=form.mobile.value;
const email=form.email.value;
const password=form.email.value;

const userInfo={
  name,
  pin,
  mobile,
  email,
  password,
  status:"Pending"
}

console.log(userInfo)
}

  return (
    <div>
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">REGISTER NOW !</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="your name." className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pin</span>
            </label>
            <input type="number" placeholder="PIN" name='pin' className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input type="number"  placeholder="mobile number" name='mobile' className="input input-bordered" required />

          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"  placeholder="Your Email." name='email' className="input input-bordered" required />

          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"  placeholder="Your password." name='password' className="input input-bordered" required />

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Registration
