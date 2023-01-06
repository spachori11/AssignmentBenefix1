import React from 'react'
import './image8.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Image8({ pic,email,setEmail,popup,setPopup,success }) {
  return (
    <div>
        <div className='box8'>
        <div onClick={()=>setPopup(true)} className='cross8'><FontAwesomeIcon className='cross88' icon={faTimes}/></div>
        {
          success ? (<div><div className='invite8'>Invite sent to {email}</div>
          <img className='image8' src={pic} alt='photo'/></div>) : (<div className='invite8'>Could not send Invite!!!</div>)
        }
          
          
        </div>
    </div>
  )
}

export default Image8