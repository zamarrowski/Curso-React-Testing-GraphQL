# Hooks

Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

Antes escribiríamos algo así:
```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Con hooks quedaría así:

```js
import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Declarando múltiples variables de estado

```js
Puedes usar el Hook de estado más de una vez en un mismo componente:

function ExampleWithManyStates() {
  // Declarar múltiple variables de estado!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

## useEffect()

El Hook de efecto, useEffect, agrega la capacidad de realizar efectos secundarios desde un componente funcional. Tiene el mismo propósito que componentDidMount,componentDidUpdate y componentWillUnmount en las clases React, pero unificadas en una sola API.

Con clases:

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Con hooks:

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**¿Qué hace useEffect?** Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM. En este efecto, actualizamos el título del documento, pero también podríamos hacer peticiones de datos o invocar alguna API imperativa.

**¿Por qué se llama a useEffect dentro del componente?** Poner useEffect dentro del componente nos permite acceder a la variable de estado count (o a cualquier prop) directamente desde el efecto. No necesitamos una API especial para acceder a ella, ya que se encuentra en el ámbito de la función. Los Hooks aprovechan los closures de JavaScript y evitan introducir APIs específicas de React donde JavaScript ya proporciona una solución.

**¿Se ejecuta useEffect después de cada renderizado?** ¡Sí! Por defecto se ejecuta después del primer renderizado y después de cada actualización. Más tarde explicaremos cómo modificar este comportamiento. En vez de pensar en términos de “montar” y “actualizar”, puede resultarte más fácil pensar en efectos que ocurren “después del renderizado”. React se asegura de que el DOM se ha actualizado antes de llevar a cabo el efecto.


## Como conseguir el mismo funcionamiento que los ciclos de vida:

### componentDidMount():


```js
class Example extends React.Component {
  componentDidMount() {
    console.log('I am mounted!');
  }
  render() {
    return null;
  }
}
```


```js
function Example() {
  useEffect(() => console.log('mounted'), []);
  return null;
}
```

### componentDidUpdate();

```js
componentDidUpdate() {
  console.log('mounted or updated');
}
```

```js
useEffect(() => console.log('mounted or updated'));
```

### componentWillUnmount():

```js
componentWillUnmount() {
  console.log('will unmount');
}
```

```js
useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);
```

## Construyendo tus propios Hooks

Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.

```js
function useCallAPI(url) {
  const [data, setData] = useState([])

  const getData = async (url) => {
    let response = await fetch(url)
    let data = await response.json()
    setData(data.results)
  }

  useEffect(() => {
    getData(url)
  }, [])

  return data
}
```

Después lo podemos usar así:

```js
function App() {

  const data = useCallAPI('http://www.mocky.io/v2/5d965a7233000003cd2f9091')

  return (
    <>
     <RedditPosts data={data} />
    </>
  );
}
```


### Ejercicios:

1. Crear un componente funcional que sea un campo de texto y cuando escribamos algo cambie las "a" por las "b"
2. Crear un componente funcional que cuando desaparezca imprima por consola "Desmontado!"
3. Crear un componente funcional que cuando reciba nuevas props del padre imprima por consola "Actualizando!"."
4. Crear un componente funcional que llame a la API https://jsonplaceholder.typicode.com/todos y pinte las tareas.
6. Crear un componente funcional que sea un campo de texto que muestre un error cuando el texo introducido no sea "zamarro". Controlar si el componente está "dirty".
5. Extrar la lógica de la llamada a la API a un hook personalizado y usarlo.

[<- Volver al índice](./../README.md)
