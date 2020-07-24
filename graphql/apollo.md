# Apollo

![apollo](https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg)

## ¿Qué es Apollo?

Es una librería para controlar el estado que nos permite ejecutar queries, mutations, controlar caché y todo de una manera muy fácil en React.

```
yarn add @apollo/client graphql
```

## Como conectar React al servidor de GraphQL

Primero debemos de crear un cliente para conectarnos al servidor:

```js
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})
```

Una vez que tenemos ese cliente, Apollo nos ofrece un provider para React al cual le pasaremos por props ese cliente:

```js

import { ApolloProvider } from '@apollo/client'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

## Ejercicios

1. Crear el cliente de Apollo y añadir el provider a nuestra aplicación

[<- Volver al índice](./../README.md)