/* eslint-disable no-unused-vars */
import U1 from './images/u1.jpeg';
import U2 from './images/u2.jpeg';
import U3 from './images/u3.jpeg';
import U4 from './images/u4.jpeg';
import U5 from './images/u5.jpeg';
import U6 from './images/u6.jpeg';
import U7 from './images/u7.jpeg';
import U8 from './images/u8.jpeg';
import U9 from './images/u9.jpeg';
import U10 from './images/u10.jpeg';
/* eslint-disable no-unused-vars */
import React from 'react'
import './Uxgyrs.css';

const uxgyrMap = {
    U1,
    U2,
    U3,
    U4,
    U5,
    U6,
    U7,
    U8,
    U9,
    U10
};


const Uxgyrs = ({uxgyrPic}) => {
    // console.log(uxgyrPic)
    // console.log(uxgyrMap[uxgyrPic])
  return (
    <div className='uxgyrDiv'>
      <img className='uxgyr' src={uxgyrMap[uxgyrPic]} alt="" />
    </div>
  )
}

export default Uxgyrs
