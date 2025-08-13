import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <div>
      <Link to={`/product/${id}`} className='text-gray-700'>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <div className='pt-3 pb-1 text-sm'> {name} </div>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </div>
  )
}

export default ProductItem
