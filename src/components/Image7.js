import React,{ useState } from 'react'
import './image7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faPercentage,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Image8 from './Image8';
function Image7() {
  const [popup,setPopup] = useState(true);
  const [email,setEmail] = useState("");
  const [inv,setInv] = useState(true);
  const [success,setSuccess] = useState(true);
  const [pic,setPic] = useState("");
  

  const clickHandler = () => {
    
    axios.get(`https://reqres.in/api/users/3`)
    .then(res=>{
      
      console.log(res.data.data.email)
      setEmail(res.data.data.email);
      console.log(res.data.data.avatar);
      setPic(res.data.data.avatar);
      setInv(false)
    })
    .catch(err=>{
      setSuccess(false)
    })
    setPopup(false)
    
  }
  return (
    <>
    {
      popup ? (<div>
    <div className='date7'>Today, March 25</div>
    <div className='circle7'>
              <div className='percent7'><FontAwesomeIcon className='percent7' icon={faPercentage} /></div>
            </div>
        <div className='majorbox'>
            <div className='Iccilast'>20% off on ICICI Debit Cards</div>
            <div className='Reminder7'>
                
            </div>
            <div className='Reminder71'>Reminder On</div>
            <div className='Amazon7'>
              <div className='Amazon71'>Amazon</div>
            </div>
            <div className='location7'><FontAwesomeIcon className='location71'  color='white' icon={faMapMarker} /></div>
            <div className='angle7'><FontAwesomeIcon color='white' icon={faAngleUp} /></div>
        </div>
        <div className='Offer'>This Offer applies only on ICICI Debit Cards payment made on Amazon</div>
        <div className='des'>Description</div>
        <div onClick={clickHandler} className='button7'>
            {
              inv ? (<div className='button71'>Invite</div>) : (<div className='button71'>Invited</div>)
            }
        </div>
        <div className='edit7'>Edit</div>
    </div>) : (<Image8 pic={pic} email={email} setEmail={setEmail} popup={popup} setPopup={setPopup} success={success}/>)
    }
    
    </>
  )
}

export default Image7