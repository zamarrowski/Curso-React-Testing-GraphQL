# Formularios en React

Los elementos de formularios en HTML funcionan un poco diferente a otros elementos del DOM en React, debido a que los elementos de formularios conservan naturalmente algún estado interno. Por ejemplo, este formulario solamente en HTML, acepta un solo nombre.

```js
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

Este formulario tiene el comportamiento predeterminado en HTML que consiste en navegar a una nueva página cuando el usuario envía el formulario. Si deseas este comportamiento en React, simplemente ya funciona así. Pero en la mayoría de casos, es conveniente tener una función en Javascript que se encargue del envío del formulario, y que tenga acceso a los datos que el usuario introdujo en el formulario. La forma predeterminada para conseguir esto es una técnica llamada “componentes controlados”.

## Componentes controlados


En HTML, los elementos de formularios como los `<input>`, `<textarea>` y el `<select>` normalmente mantienen sus propios estados y los actualizan de acuerdo a la interacción del usuario. En React, el estado mutable es mantenido normalmente en la propiedad estado de los componentes, y solo se actualiza con setState().

Podemos combinar ambos haciendo que el estado de React sea la “única fuente de la verdad”. De esta manera, los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario. Un campo de un formulario cuyos valores son controlados por React de esta forma es denominado “componente controlado”.

Por ejemplo, si queremos hacer que el ejemplo anterior muestre el nombre que esta siendo suministrado, podemos escribir el formulario como un componente controlado:

```js
class NameForm extends React.Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

```

## La etiqueta textarea

En HTML, el elemento `<textarea>` define su texto por sus hijos:

```js
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

En React, un `<textarea>` utiliza un atributo value en su lugar. De esta manera, un formulario que hace uso de un `<textarea>` puede ser escrito de manera similar a un formulario que utiliza un campo en una sola línea:

```js
 <textarea value={this.state.value} onChange={this.handleChange} />
```


## La etiqueta select

En HTML, `<select>` crea una lista desplegable. Por ejemplo, este HTML crea una lista desplegable de sabores:

```js
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```
Ten en cuenta que la opción Coco es inicialmente seleccionada, debido al atributo selected. React, en lugar de utilizar el atributo selected, utiliza un atributo value en la raíz de la etiqueta select. Esto es más conveniente en un componente controlado debido a que solo necesitas actualizarlo en un solo lugar, por ejemplo:

```js
<select value={this.state.selectedFruit} onChange={this.handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```


## Manejando múltiples inputs

Cuando necesitas manejar múltiples elementos input controlados, puedes agregar un atributo name a cada uno de los elementos y dejar que la función controladora decida que hacer basada en el valor de event.target.name.

```js
<input
  name="isGoing"
  type="checkbox"
  checked={this.state.isGoing}
  onChange={this.handleInputChange}
/>

handleInputChange(event) {
  const target = event.target
  const value = target.type === 'checkbox' ? target.checked : target.value
  const name = target.name

  this.setState({
    [name]: value
  })
}

```

## Ejercicios:

1. Crear un componente `Select` que pemita como props:
    * value
    * items
    * onChange

2. Crear un formulario donde vamos a rellenar informacion de un usuario. Al pulsar el boton o pulsar el enter debería de sacar un mensaje en la consola con todos los datoss. El formulario debe contener los siguientes campos:

    * Name
    * Firstname
    * Description (textarea)
    * Gender (radiobutton)
    * Age
    * Country (Spain, USA)
    * Province (Guadalajara, Madrid en caso de haber seleccionado Spain como pais)
    * Hobbies (**Checbox**:Games, Football, Basketball, Art)


[<- Volver al índice](./../README.md)
