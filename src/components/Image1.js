import React,{ useState } from 'react'
import './image1.css';

import { FontAwesomeIcon } from '../components/@fortawesome/react-fontawesome';

import { faAngleLeft, faAngleRight, faBars,faCircle,faCalendar,faPlus,faSearch,faBell } from '../components/@fortawesome/free-solid-svg-icons'
import Image2 from './Image2';
import Image3 from './Image3';


function Image1() {
    const [page1,setPage1] = useState(true);
    return (
        <div className='Container1'>

            <div className='Child1'>
                <div className='heading1'>
                    <div className='heading1-child'>
                        <div className='march'>March</div>
                        <div className='year'>2020</div>
                        <div className='first'>
                            <div><FontAwesomeIcon icon={faAngleLeft} /></div>
                        </div>
                        <div className='second'>
                            <div><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>
                    </div>
                    <div className='bar'>
                        <div onClick={()=>setPage1(!page1)} className='bar1'><FontAwesomeIcon icon={faBars} /></div>
                    </div>
                    <div className='bell'>
                        <div className='bell1'><FontAwesomeIcon className='bellIcon' icon={faBell} /></div>
                        <div className='bell2'><FontAwesomeIcon className='bellIcon1' icon={faCircle} /></div>
                    </div>
                </div>
            </div>

            {
                page1 ? (<Image3/>) : (<Image2/>)
            }

            <div className='footer'>
                <div className='calender'>
                <FontAwesomeIcon className='C4' icon={faCalendar} />
                </div>
                <div className='button'>
                    <div className='B5'></div>
                    <FontAwesomeIcon className='R6' icon={faPlus} />
                </div>
                <div className='search'>
                <FontAwesomeIcon className='S7' icon={faSearch} />
                </div>
                
            </div>

        </div>
    )
}

export default Image1