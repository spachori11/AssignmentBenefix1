import React,{ useState } from 'react'
import './image1.css';
import Image4 from './Image4';
import Image5 from './Image5';

function Image2() {
  const [image4,setImage4] = useState(true);
  return (
    <>
    {
      image4 ? (<Image4 image4={image4} setImage4={ setImage4}/>) : (<Image5/>)
    }
    
    </>
  )
}

export default Image2