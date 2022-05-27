import React from 'react'
import { useParams } from 'react-router-dom'
import product_lists from '../product_lists.json'

const ProductDes = () => {

    const { id } = useParams();

    return (
        <div>
            {
                product_lists.map((item) => {
                    return (
                        <div>
                            <div>
                                <img src={item.imageURL} />
                                <div>
                                    {item.name}
                                </div>
                                <div className="details__prices">
                                    <span className="details__actaul">${(item.price, { code: 'USD' })}</span>
                                    <span className="details__discount">${(item.discountPrice, { code: 'USD' })}</span>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductDes