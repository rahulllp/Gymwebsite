import React from 'react'
import aboutimage from '../images/about.png'
function about() {
  return (
    <div id='about'>
    <div className='about-image'>
      <img src={aboutimage} alt=''/>
    </div>
    <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquid
         ea reiciendis totam deleniti quibusdam culpa quidem vero perferendis dignissimos
          omnis minus, harum quam modi corrupti inventore quo molestias ab.
        </p>
   <button>READ MORE</button>
    </div>
    </div>
  )
}

export default about
