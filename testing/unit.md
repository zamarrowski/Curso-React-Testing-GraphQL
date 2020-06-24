# Unit testing y TDD

![tdd](https://miro.medium.com/proxy/0*R1JmZVWM_H_VhQgy.jpg)

Es buena práctica separar la lógica de nuestra aplicación del componente de React. Esto nos permite testear de manera más fácil y conseguimos una mayor independencia de React.


## Ejercicios

1. Dado el siguiente código debemos:
  * Las funciones que tenemos dentro de la clase que no se han implementado sacarlas a un fichero aparte
  * Escribir los tests para cada función
  * Implementar la función
  * Integrarlo con nuestro componente
  * Refactor
  * EXTRA: añadir un campo de texto que permita filtrar los productos que existen por nombre

```js
import React from 'react'

export default class ProductsPage extends React.Component {

  state = {
    products: [
      {
        id: 1,
        name: 'Chachopo',
        price: 30,
      },
      {
        id: 3,
        name: 'Navajas',
        price: 25,
      },
      {
        id: 2,
        name: 'Chorizo a la sidra',
        price: 15,
      }
    ]
  }

  changeOrderByPrice = () => {
    //Should order all products by price in descending order
  }

  getPriceColor = price => {
    // price > 25 should return red
    // price > 15 and price <= 25 should return orange
    // In any other case return green
  }

  render() {
    return (
      <>
        <h1>Products</h1>
        <button onClick={this.changeOrderByPrice}>Change order</button>
        {this.state.products.map(product => (
          <div key={product.id} style={{color: this.getPriceColor(product.price)}}>
            {product.name} - {product.price}
          </div>
        ))}
      </>
    )
  }
}
```

[<- Volver al índice](./../README.md)