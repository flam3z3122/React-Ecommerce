import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="nav">
      <li className='nav-item'>
        <Link className="nav-link active" to='/' >Home</Link>
        </li>
        <li> 
        <Link className="nav-link" to='/products'>Products</Link>     
        </li>
        <li>
        <Link className="nav-link" to='/cart'>Cart</Link> 
        </li>
    </div>
  )
}

export default Header