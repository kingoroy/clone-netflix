import React, {useState} from 'react'

import '../styles/Card5.css';
function Card5() {
const [button1,setButton1]=useState(false);
const [button2,setButton2]=useState(false);
const [button3,setButton3]=useState(false);
const [button4,setButton4]=useState(false);
const [button5,setButton5]=useState(false);
const [button6,setButton6]=useState(false);


 var note1=null;
    if(button1){
       note1=<p>Netflix is a streaming service that offers a wide variety 
        of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

      You can watch as much as you want, whenever you want, without a single ad – 
      all for one low monthly price. There's always something new to discover, 
      and new TV shows and movies are added every week!</p>}
      else{
        note1=null;
      }
      var note2=null;
      if(button2){
        note2=<p>Watch Netflix on your smartphone, tablet, Smart TV, laptop,
           or streaming device, all for one fixed monthly fee.
            Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
      }else{
        note2=null;
      }
      var note3=null;
      if(button3){
note3=<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app.
 Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
      }else{note3=null;}
      var note4=null;
      if(button4){
note4=<p>Netflix is flexible. There are no annoying contracts and no commitments.
   You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
      }else{note4=null;}
      var note5=null;
      if(button5){
note5=<p>Netflix has an extensive library of feature films, documentaries, 
  TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
      }else{note5=null;}
      var note6=null;
      if(button6){
note6=<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that
 let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
      }else{note6=null;}

    
  return (
    
    <div className='card5 container-fluid'>
      <div className='row'>
      <div className='text5 col-md-8 offset-md-2 text-light text-center'>
        <h1>Frequently Asked Questions</h1>
        <button className=' button1'onClick={()=>setButton1(!button1)}>What Is Netflix? <span className='showHide'>{button1===true?'X':'+'}</span>
          </button>
          {button1 && <div className='note1'>{note1}</div>}
          <button className=' button1'onClick={()=>setButton2(!button2)}>How much does Netflix cost? <span className='showHide'>{button2===true?'X':'+'}</span>
          </button>
          {button2 && <div className='note1'>{note2}</div>}
          <button className=' button1'onClick={()=>setButton3(!button3)}>where can i watch? <span className='showHide'>{button3===true?'X':'+'}</span>
          </button>
          {button3 && <div className='note1'>{note3}</div>} 
          <button className=' button1'onClick={()=>setButton4(!button4)}>how do i cancel? <span className='showHide'>{button4===true?'X':'+'}</span>
          </button>
          {button4 && <div className='note1'>{note4}</div>} 
          <button className=' button1'onClick={()=>setButton5(!button5)}>what can i watch on netflix? <span className='showHide'>{button5===true?'X':'+'}</span>
          </button>
          {button5 && <div className='note1'>{note5}</div>}
           <button className=' button1'onClick={()=>setButton6(!button6)}>is netflix good for kids? <span className='showHide'>{button6===true?'X':'+'}</span>
          </button>
          {button6 && <div className='note1'>{note6}</div>}
          <div style={{marginTop:"50px",marginBottom:"50px"}}>
            <p style={{fontSize:"20px"}}>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input className="input" type="text" placeholder="enter your email"/>
                    <button className='buttonGet btn btn-danger'>Get Started</button></div>
          
        </div>
      </div>
    </div>
  )
}

export default Card5