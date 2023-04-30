import React from 'react'
import Product1 from './Product1'
import Product2 from './Product2'

const Content = () => {
  return (
    <div className='content'>
        <div className='container'>
            <Product1/>
            <Product2/>
        </div>
    </div>
  )
}

export default Content