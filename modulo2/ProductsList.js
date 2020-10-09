import React from 'react'

export default props => {
  return (
    props.products.map(product => (
      <div key={product.id}>
        {product.name} - {product.price}
        {props.button(product)}
      </div>
    ))
  )
}
