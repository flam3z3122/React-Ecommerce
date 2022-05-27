import React from 'react'
import { Link } from 'react-router-dom'
import product_lists from '../product_lists.json'

const Home = () => {
  return (
    <div className='home-container'>
      {
        product_lists.map((item) => {
          return (
            <Link to={`/productdes/${item.id}`}>
            <div className="card" style={{width : "18rem"} } key={item.id} >
              <img src={item.imageURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.brandName}</h5>
                  <p className="card-text">{item.category}</p>
                  <p className="card-text">₹ {item.price} Rs</p>

                </div>
            </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Home