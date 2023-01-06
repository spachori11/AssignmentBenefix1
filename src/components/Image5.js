import React,{ useState } from 'react'
import './image5.css'
import Image6 from './Image6';
import Image7 from './Image7';
function Image5() {
  const [imagelast,setImagelast] = useState(true);
  return (
    <>
    {
      imagelast ? (<Image6 imagelast={imagelast} setImagelast={setImagelast}/>) : (<Image7/>)
    }
    
    </>
  )
}

export default Image5