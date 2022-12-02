/** @format */

import React from 'react';
import Header from './Header';
import './ComponentStyle.css';
import { useState, useEffect, useRef } from 'react';

function Slider() {
  const [initialImgClass, changeImageClass] = useState('image-div1');
  const [count, setCount] = useState(0);
  let timer;
  // let initialProgressBarWidth = 50;

  useEffect(() => {
    // let progressBar = document.querySelector('#progress-bar');
    timer = setInterval(() => {
      setCount(count + 1);
      // progressBar.style.width = initialProgressBarWidth + count + 'px';
      if (count === 10) {
        // console.log(progressBar.style.width);
        changeImageClass('image-div2');
      } else if (count === 20) {
        changeImageClass('image-div3');
      } else if (count === 30) {
        changeImageClass('image-div1');
        setCount(0);
      }
    }, 300);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <Header />
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className='col-sm mt-5'>
            <img className={`img-fluid ${initialImgClass}`} />
          </div>
        </div>
        <div
          className='container text-end'
          id='div-loading'
        >
          <h6
            id='txtCount'
            className='text-success'
          >
            Loading... {count} %
          </h6>
        </div>
      </div>
      {/* <div
        className='container'
        id='div-progress-bar'
      >
        <p id='progress-bar'>...</p>
      </div> */}
      <div
        className='container-fluid'
        id='div-developer-info'
      >
        <div className='container text-center'>
          <div className='container-fluid mt-1'>
            <p className='text-primary'>Created by Adebayo Bunmi Solomon</p>
            <p className='text-success'>&copy;December, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
