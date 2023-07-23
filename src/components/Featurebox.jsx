import React from 'react'

function Featurebox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt=''/>
      </div>
      <div className='a-b-text'>
        <h2>{props.tittle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dicta.
        </p>
      </div>
    </div>
  )
}

export default Featurebox
