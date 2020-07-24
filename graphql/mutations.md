# Mutations

## Ejecutando una mutation

Apollo nos da un hook llamado `useMutation` al cual se le puede pasar una mutation y nos devuelve una array con dos elementos:

* una función que ejecuta la query y recibe un objeto por el cual le podemos pasar variables a la query
* un objeto con la propiedad `data`

## Escribiendo una mutation

Lo primero que tenemos que hacer es escribir una mutation para poder pasársela a `useMutation`.

```js
import { gql } from '@apollo/client'

export const CHANGE_USERNAME = gql`
  mutation changeUsername($userId: ID!, $newUsername: String!) {
    changeUsername(userId: $userId, newUsername: $newUsername) {
      username
    }
  }
`
```

## Usando `useMutation`

Una vez que tenemos creada nuestra primera query podemos pasársela a `useMutation`:

```js
import React from 'react';
import './App.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS, CHANGE_USERNAME } from './queries'

function App() {

  const { loading, error, data, refetch } = useQuery(GET_USERS)
  const [ changeUsername ] = useMutation(CHANGE_USERNAME)

  if (loading) return 'Loading...'
  if (error) return `Ops! Something went wrong!`

  const onChangeUsername = (userId, newUsername) => {
    changeUsername({ variables: { userId, newUsername } })
    refetch()
  }

  return (
    <div className="App">
      {data && data.getUsers.map(u => (
        <p onClick={() => onChangeUsername(u.id, 'zamarrowski')}>{u.username}</p>
      ))}
    </div>
  );
}

export default App;

```

## Ejercicios

1. Siguiendo la aplicación anterior permitir cambiar el nombre de usuario desde /users/:id

[<- Volver al índice](./../README.md)