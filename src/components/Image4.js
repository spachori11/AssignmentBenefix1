import React from 'react'
import './image1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage } from '@fortawesome/free-solid-svg-icons'

function Image4({ image4,setImage4 }) {
  return (
    <div>
        <p className='H Mon'>M</p>
            <p className='H Tue'>T</p>
            <p className='H Wed'>W</p>
            <p className='H Thu'>T</p>
            <p className='H Fri'>F</p>
            <p className='H Sat'>S</p>
            <p className='H Sun'>S</p>
            
            <p className='B B24'>24</p>
            <p className='B B25'>25</p>
            <p className='B B26'>26</p>
            <p className='B B27'>27</p>
            <p className='B B28'>28</p>
            <p className='B B29'>29</p>

            <p className='P P1'>1</p>
            <p className='P P2'>2</p>
            <p className='P P3'>3</p>
            <p className='P P4'>4</p>
            <p className='P P5'>5</p>
            <p className='P P6'>6</p>
            <p className='P P7'>7</p>
            <p className='P P8'>8</p>
            <p className='P P9'>9</p>
            <p className='P P10'>10</p>
            <div className='orange'>
                <p className='P11'>11</p>
            </div>

            <p className='P P12'>12</p>
            <p className='P P13'>13</p>
            <p className='P P14'>14</p>
            <p className='P P15'>15</p>
            <p className='P P16'>16</p>
            <p className='P P17'>17</p>
            <p className='P P18'>18</p>
            <p className='P P19'>19</p>
            <p className='P P20'>20</p>
            <p className='P P21'>21</p>
            <p className='P P22'>22</p>
            <p className='P P23'>23</p>
            <p className='P P24'>24</p>
            <p onClick={()=> setImage4(!image4)} className='P P25'><FontAwesomeIcon className='Modulus' icon={faPercentage} /></p>
            <p className='P P26'>26</p>
            <p className='P P27'>27</p>
            <p className='P P28'>28
            <div className='circle11'></div>
            <div className='circle11 Y'></div>
            <div className='circle11 Z'></div>
            </p>
            <p className='P P29'>29</p>
            <p className='P P30'>30</p>
            <p className='P P31'>31</p>

            <p className='B B1'>1</p>
            <p className='B B2'>2</p>
            <p className='B B3'>3</p>
            <p className='B B4'>4</p>
            <p className='B B5'>5</p>
    </div>
  )
}

export default Image4