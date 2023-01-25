import React from 'react'
import "../styles/Card1.css";
import { useState } from "react";
function Card1() {
    const [signIn,setSignIn]=useState(false);
    var text=null;
    if(signIn){
      text=<p className='text-success text-center'>kaisa laga mera mazak</p>
    }else{text=null;}
  return (
    <div className="Card1 container-fluid">
        <div className='row'>
        <div>
            <img className="logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"/>
            <div className="flex">
                <select className="btn btn-outline-light btn-sm">
                    <option value="English">English</option>
                    <option value="hindi">Hindi</option>
                    </select>
                    <span/>
                    <button className="signIn btn btn-danger btn-sm" onClick={()=>{setSignIn(!signIn)}}>SIGN IN</button>
                    </div>
                </div>
                <div className="tv text-light col-md-6 offset-md-3 col-sm-10 offset-sm-1 text-center">
                    {text?text:null}
                    <h1 className='main-text'>Unlimited movies, TV, shows and more.</h1>
                    <p className="watch-text">Watch anytime, Cancel anytime.</p>
                    <p className='ready-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input className="input" type="text" placeholder="enter your email"/>
                    <button className='buttonGet btn btn-danger'>Get Started</button>
                    </div>
    </div>
    </div>
  )
}

export default Card1