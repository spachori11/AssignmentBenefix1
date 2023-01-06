import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import './image5.css'

function Image6({ imagelast,setImagelast }) {
  return (
    <div>
        <p className='H Mon'>M</p>
            <p className='H Tue'>T</p>
            <p className='H Wed'>W</p>
            <p className='H Thu'>T</p>
            <p className='H Fri'>F</p>
            <p className='H Sat'>S</p>
            <p className='H Sun'>S</p>
            
            <p className='B55 B24'>24</p>
            <p className='B55 B25'>25</p>
            <p className='B55 B26'>26</p>
            <p className='B55 B27'>27</p>
            <p className='B55 B28'>28</p>
            <p className='B55 B29'>29</p>

            <p className='P55 P155'>1</p>
            <p className='P55 P255'>2</p>
            <p className='P55 P355'>3</p>
            <p className='P55 P455'>4</p>
            <p className='P55 P555'>5</p>
            <p className='P55 P655'>6</p>
            <p className='P55 P755'>7</p>
            <p className='P55 P855'>8</p>
            <p className='P55 P955'>9</p>
            <p className='P55 P1055'>10</p>
            

            <p className='P55 P1255'>12</p>
            <p className='P55 P1355'>13</p>
            <p className='P55 P1455'>14</p>
            <p className='P55 P1555'>15</p>
            <p className='P55 P1655'>16</p>
            <p className='P55 P1755'>17</p>
            <p className='P55 P1855'>18</p>
            <p className='P55 P1955'>19</p>
            <p className='P55 P2055'>20</p>
            <p className='P55 P2155'>21</p>
            <p className='P55 P2255'>22</p>
            <p className='P55 P2355'>23</p>
            <p className='P55 P2455'>24</p>
            <div className='P2555'>
                <div className='P25555'>25</div>
            </div>
            <p className='P55 P2655'>26</p>
            <p className='P55 P2755'>27</p>
            <p className='P55 P2855'>28
            <div className='circle66'></div>
            <div className='circle66 Y1'></div>
            <div className='circle66 Z1'></div>
            </p>
            <p className='P55 P2955'>29</p>
            <p className='P55 P3055'>30</p>
            <p className='P55 P3155'>31</p>

            <p className='B55 B155'>1</p>
            <p className='B55 B255'>2</p>
            <p className='B55 B355'>3</p>
            <p className='B55 B455'>4</p>
            <p className='B55 B555'>5</p>
            <div className='Today'>Today, March 25</div>
            <div onClick={()=>setImagelast(!imagelast)} className='Debit'>
                <div className='Debit1'>20% of on ICICI Debit Cards</div>
            </div>
            <div className='circle'>
              <div className='percent'><FontAwesomeIcon className='percent1' icon={faPercentage} /></div>
            </div>
    </div>
  )
}

export default Image6