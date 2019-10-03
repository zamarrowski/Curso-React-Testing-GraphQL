## High order components

Un componente de orden superior (HOC por las siglas en inglés de higher-order component) es una técnica avanzada en React para el reuso de la lógica de componentes. Los HOCs no son parte de la API de React. Son un patrón que surge de la naturaleza composicional de React.

En concreto, un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Mientras que un componente transforma props en interfaz de usuario, un componente de orden superior transforma un componente en otro.

Los HOCs son comunes en bibliotecas de terceros usadas en React, tales como connect en Redux y createFragmentContainer en Relay.

## Usa HOCs para preocupaciones transversales

Los componentes son la unidad primaria de reuso de código en React. Sin embargo, encontrarás que algunos patrones no se ajustan directamente a componentes tradicionales.


```js
const APIContainer = (Component, url) => {
  return class extends React.Component {
    state = {
      data: []
    }

    async componentDidMount() {
      let response = await fetch(url)
      let data = await response.json()
      this.setState({ data: data.results })
    }

    render() {
      return(
        <Component data={this.state.data} />
      )
    }

  }
}

const RedditPosts = props =>
  <ul>
    {props.data.map((el, key) => (
      <li key={key}>{el.name}</li>
    ))}
  </ul>

const RedditPostsDiv = props =>
    <div>
      {props.data.map((el, key) => (
        <div key={key}>{el.name}</div>
      ))}
    </div>

const Reddit = APIContainer(RedditPosts, 'http://www.mocky.io/v2/5d965a7233000003cd2f9091')
const RedditDiv = APIContainer(RedditPostsDiv, 'http://www.mocky.io/v2/5d965aa833000077962f9093')

function App() {
  return (
    <>
      <Reddit />
      <RedditDiv />
    </>
  );
}

export default App;
```


## Ejercicios:

1. Crear un HOC que haga peticiones a una api (https://jsonplaceholder.typicode.com/) y usarlo para renderizar el listado de posts como el detalle de un post.


[<- Volver al índice](./../README.md)
