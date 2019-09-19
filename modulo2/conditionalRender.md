# Renderizado condicional

En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Usa operadores de JavaScript como if o el operador condicional para crear elementos representando el estado actual, y deja que React actualice la interfaz de usuario para emparejarlos.

Considera estos dos componentes:

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
```

```js
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

Vamos a crear un componente Greeting que muestra cualquiera de estos componentes dependiendo si el usuario ha iniciado sesión:

```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

```js
  <Greeting isLoggedIn={false} />,
```

## If en una línea con operador lógico &&


Puedes embeber cualquier expresión en JSX envolviéndola en llaves. Esto incluye al operador lógico `&&` de JavaScript. Puede ser útil para incluir condicionalmente un elemento:

```js
const Users = props => {
  const users = props.users;

  return users.length ? <UsersList /> : <EmptyList />
}
```

## If-Else en una línea con operador condicional

```js
const Greeting = props => {
  const isLoggedIn = this.state.isLoggedIn
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  )
}
```

## Evitar que el componente se renderice

En casos excepcionales, es posible que desees que un componente se oculte a sí mismo aunque haya sido renderizado por otro componente. Para hacer esto, devuelve `null` en lugar del resultado de renderizado.


## Ejercicios:

1. Quiero tener una pagina que solo se muestre cuando estoy logueado. Cuando estoy logueado se mostrará un texto que dira `"Esta pagina solo puedo verla por que estoy logueado"` y un botón de cerrar sesión. Cuando **NO** esté logueado mostrará un boton de Login y un mensaje de `"Inicia sesión para ver contenido privado"`.


[<- Volver al índice](./../README.md)
