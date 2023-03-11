import React from 'react'

const Foodcard = ({image, name ,description}) => {
  return (
    <div className='foodCard'>
      <img className="image" src={image} alt="biryani photo" />
      <h2>{name}</h2>
      <div className="description">
        {description}
      </div>
    </div>
  )
}

export default Foodcard
