import React from 'react'
import LayoutWrapper from '../component/HOC/LayoutWrapper'
import Store from '../component/store/Store'

const Shop = () => {
  return (
    <div>
        <div>
          <Store/>
        </div>
    </div>
  )
}

export default LayoutWrapper(Shop)