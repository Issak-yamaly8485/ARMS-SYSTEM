import React from 'react'
import './ProgramCard.css'
import { Link } from 'react-router-dom'
const programCard = ({title,route}) => {
  return (
    <div className='program-card'>
      <h2>{title}</h2>
      <button><Link to={route}>Go to {route}</Link></button>
    </div>
  )
}

export default programCard