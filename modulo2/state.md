# El estado

Aquí introduciremos el concepto de estado en un componente de React.

```jsx
const Counter = props => {

  let count = 0

  let increment = () => {
    count += 1
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  )
}
```

Para actualizar la interfaz la única manera que hay es através del `state`. Para poder utilizar el estado de un componente y hacer que sea dinámico el componente tiene que ser una clase. Para pasar cualquier componente funcional a uno de clase solo hay que seguir los siguientes pasos:

1. Crear una clase ES6 con el mismo nombre que herede de `React.Component`.
2. Agregar un único método vacío llamado `render()`.
3. Mover el cuerpo de la función al método `render()`.
4. Reemplazar props con `this.props` en el cuerpo de `render()`.
5. Borrar el resto de la declaración de la función ya vacía.

Quedaría de la siguiente manera:

```js
class Counter extends React.Component {
  render() {
    return (
       <>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
      </>
    )
  }
}
```

Una vez que tenemos una clase podemos usar el `state`. Para agregar estado a una clase basta con añadirlo como propiedad:

```js
class Counter extends React.Component {

  state = {
    count: 0
  }

  render() {
    return (
       <>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
      </>
    )
  }
}
```

Por lo que en vez de usar `count` usaremos `this.state.count`:

```js
class Counter extends React.Component {

  state = {
    count: 0
  }

  render() {
    return (
       <>
        <div>{this.state.count}</div>
        <button onClick={increment}>Increment</button>
      </>
    )
  }
}
```

El estado **NUNCA** se debe modificar usando `this.state.count = 2`. Existe una función llamada `this.setState` que pasandole un objeto con lo que queremos modificar nos actualizará el estado y se encargará de actualizar la interfaz.

Por lo que quedaría asi:

```js
class Counter extends React.Component {

  state = {
    count: 0
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
       <>
        <div>{this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </>
    )
  }
}
```

## Las actualizaciones del estado pueden ser asíncronas

React puede agrupar varias invocaciones a setState() en una sola actualización para mejorar el rendimiento.

Debido a que this.props y this.state pueden actualizarse de forma asincrónica, no debes confiar en sus valores para calcular el siguiente estado.

Por ejemplo, el código anterior puede fallar en actualizar el contador. Para arreglarlo, usa una segunda forma de `setState()` que acepta una función en lugar de un objeto. Esa función recibirá el estado previo como primer argumento, y las props en el momento en que se aplica la actualización como segundo argumento:

```js
this.setState(state => ({
  count: state.count + 1
}))
```

## Las actualizaciones de estado se fusionan

Cuando invocas a setState(), React combina el objeto que proporcionaste con el estado actual.

Por ejemplo, tu estado puede contener varias variables independientes:
```js
state = {
  posts: [],
  comments: []
}
```

Luego puedes actualizarlas independientemente con invocaciones separadas a setState():

```js
fetchPosts().then(response => {
  this.setState({
    posts: response.posts
  })
})

fetchComments().then(response => {
  this.setState({
    comments: response.comments
  })
})
```

## Los datos fluyen hacia abajo

Ni los componentes padres o hijos pueden saber si un determinado componente tiene o no tiene estado y no les debería importar si se define como una función o una clase.

Por eso es que el estado a menudo se le denomina local o encapsulado. No es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

Un componente puede elegir pasar su estado como props a sus componentes hijos:

```js
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

Esto también funciona para componentes definidos por el usuario:

```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
<FormattedDate date={this.state.date} />
```

**Ejercicios:**

1. Crear un componente de clase que muestre un contador y tenga dos botones: uno de incrementar y otro de decrementar.
2. Crear un componente de clase que muestre un `string` vacio y tenga dos botones: uno de incrementar y otro de decrementar. Cuandos se pinche el de incrementar añadirá una letra al string y cuando se pinche en el de decrementar quitará una letra.
3. Refactorizar el primer ejemplo para que:
    1. Los botones sean componentes a parte.
    2. El texto del contador sea un componente a parte
    3. El componente Counter sea quien tenga el estado y las funciones que lo actualizan y se lo pase a sus hijos.


[<- Volver al índice](./../README.md)
