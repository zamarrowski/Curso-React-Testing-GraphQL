# Queries

## Ejecutando una query

Apollo nos da un hook llamado `useQuery` al cual se le puede pasar una query y se ejecuta. Cuando el componente se renderiza se ejecutará. El hook `useQuery` nos devuelve un objeto con las siguientes propiedades:

* loading
* error
* data

## Escribiendo una query

Lo primero que tenemos que hacer es escribir una query para poder pasársela a `useQuery`.

```js
import { gql } from '@apollo/client'

export const GET_USERS = gql`
{
  getUsers{
    id
    username
  }
}
`
```

## Usando `useQuery`

Una vez que tenemos creada nuestra primera query podemos pasársela a `useQuery`:

```js
import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_USERS } from './queries'

function App() {

  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return 'Loading...'
  if (error) return `Ops! Something went wrong!`

  return (
    <div className="App">
      {data && data.getUsers.map(u => (
        <p>{u.username}</p>
      ))}
    </div>
  );
}

export default App;
```

## Ejecutando queries manualmente

Apollo nos da un hook llamado `useLazyQuery` el cual nos sirve para cuando queremos ejecutar queries manualmente, por ejemplo, al pulsar un botón.

`useLazyQuery` nos devuelve un array con dos elementos:

* una función que ejecuta la query y recibe un objeto por el cual le podemos pasar variables a la query
* un objeto con las propiedades `loading` y `data`

Para obtener los datos de un usuario deberíamos escribir primero la query:

```js
export const GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      username,
      first_name
    }
  }
`
```

Después podríamos usarla así:

```js
import React from 'react';
import './App.css';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_USERS, GET_USER } from './queries'

function App() {

  const { loading, error, data } = useQuery(GET_USERS)
  const [ getUserInfo, userInfoRequest ] = useLazyQuery(GET_USER)

  if (loading) return 'Loading...'
  if (error) return `Ops! Something went wrong!`

  const onGetUserInfo = (userId) => {
    getUserInfo({ variables: { userId } })
  }

  return (
    <div className="App">
      {userInfoRequest.data && `El nombre del usuario pinchado es ${userInfoRequest.data.getUser.first_name}`}
      {data && data.getUsers.map(u => (
        <p onClick={() => onGetUserInfo(u.id)}>{u.username}</p>
      ))}
    </div>
  );
}

export default App;

```

## Ejercicios

1. Montar una aplicación con react-router en la que la ruta a '/' muestre una lista de usuarios tirando contra el servidor de GraphQL
2. Cuando se pinche en un usuario tiene que ir a /users/:id y muestre la información del usuario
3. En la ventana del ejercicio anterior pintar los posts del usuario
4. BONUS: pintar los comentarios de los posts del usuario

[<- Volver al índice](./../README.md)