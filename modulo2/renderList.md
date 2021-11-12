# Pintando listas

Primero, vamos a revisar como transformas listas en Javascript.

Dado el código de abajo, usamos la función map() para tomar un array de numbers y duplicar sus valores. Asignamos el nuevo array devuelto por map() a la variable doubled y la mostramos:

```js
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((number) => number * 2)
console.log(doubled)
```

Este código muestra [2, 4, 6, 8, 10] a la consola.

En React, transformar arrays en listas de elementos es casi idéntico.

```js
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) =>
  <li>{number}</li>
)
```

## Keys

Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable:

```js
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
)
```

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key:

```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Cuando no tengas IDs estables para renderizar, puedes usar el índice del ítem como una key como último recurso:

```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

No recomendamos usar índices para keys si el orden de los ítems puede cambiar. Esto puede impactar negativamente el rendimiento y puede causar problemas con el estado del componente

## Integrar map() en JSX

JSX permite integrar cualquier expresión en llaves así que podemos alinear el resultado de map():

```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}
```


## Ejercicios:

1. Dado el siguiente array de usuarios pintar una lista (`ul`) con sus nombres:

```js
const users = ['sergio', 'victoria', 'iván', 'liviu']
```

2. Dado el siguiente array pintar una lista de usuarios donde aparezca el nombre y la edad de cada uno:
```js
const users = [{ name: 'Sergio', age: 28 }, { name: 'Victoria', age: 27 }, { name: 'Iván', age: 30 }, { name: 'Liviu', age: 26 }]
```

3. Hacer una petición a `api.coincap.io/v2/assets` y pintar un select con las distintas criptomonedas que nos devuelve

4. Vamos a crear un portfolio de criptomonedas. Debemos poder:
    * Añadir una criptomoneda al portfolio con la cantidad que deseemos
    * Borrar una criptomoneda al portfolio
    * Mostrar el precio total de nuestras criptomonedas
    * Si añadimos dos veces la misma moneda debería de sumarse a la anterior cantidad que tuviesemos y no salir por duplicado
    * Pintar una gráfica con el porcentaje de criptomonedas que tenemos. Para ello he creado este componente que podéis copiar y pegar:

```js
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const getData = cryptos => {
  const total = cryptos.reduce((acum, next) => acum + next.price * next.total, 0)
  return {
    labels: cryptos.map(c => c.name),
    datasets: [{
      data: cryptos.map(c => (c.total * c.price) * 100 / total),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    }]
  }
}

const PortfolioChart = props => (
  <div style={{height: '100px'}}>
    <Doughnut data={getData(props.cryptos)} />
  </div>
)

export default PortfolioChart
```

Hay que instalar `chartjs y react-chartjs`: `npm install --save react-chartjs-2 chart.js`
Para utilizarlo tenéis que pasarle la información de la siguiente manera:

```js
<PortfolioChart 
  cryptos={[
    { name: 'btc', total: 1, price: 50000 }, 
    { name: 'ada', total: 1050, price: 2 }, 
    { name: 'USDT', total: 35000, price: 1 }
  ]} 
/>
```

5. Crear un TODO list que permita añadir, borrar y editar. Debería de haber los siguientes componentes:
    * ListContainer
    * List
    * ListItem
    * InputText
    * AddTaskButton
    * RemoveTaskButton

[<- Volver al índice](./../README.md)

