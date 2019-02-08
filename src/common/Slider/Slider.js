import React from 'react';
import ReactSwipe from 'react-swipe';

const Slider = (props) => (
  <div>
  <ReactSwipe
    className="carousel"
    swipeOptions={{continuous: true,auto:2000,speed:500}}
  >
    <div>
      <img src="/img/slide001.jpg" style={{width:'100%'}}/>
    </div>
    <div>
      <img src="/img/slide002.jpg" style={{width:'100%'}}/>
    </div>
    <div>
      <img src="/img/slide001.jpg" style={{width:'100%'}}/>
    </div>
    <div>
      <img src="/img/slide002.jpg" style={{width:'100%'}}/>
    </div>

  </ReactSwipe>
  </div>
);

export default Slider;