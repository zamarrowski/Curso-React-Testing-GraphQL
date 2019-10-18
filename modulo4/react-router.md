# React Router

React Router es una libería para gestionar rutas en aplicaciones que utilicen ReactJS.

## Intalación

```
npm install react-router-dom
```

## Ejemplo básico

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

## Recoger valores de la URL

```js
<Route path="/users/:id">
  <Users />
</Route>
```

```js
function Users() {
  let {id} = useParams()
  return <h2>Users {id}</h2>;
}
```

## Mostrar un 404

El Switch va a renderizar la primera url que coincida, por lo que si no coincide con ninguna renderizará el 404.

```js
<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/users">
    <Users />
  </Route>
  <Route path="*">
      <NotFound />
  </Route>
</Switch>
```

### Ejercicios:

1. Crear una miniapp que tenga las siguientes secciones:
    * Home (/) Mostrar un mensaje de bienvenida
    * Users (/users) mostrar un listado de usuarios
    * UserDetail (/users/:id) Mostrar el id del usuario
    * 404