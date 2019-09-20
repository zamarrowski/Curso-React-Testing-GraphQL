## Herencia vs Composicion

React tiene un potente modelo de composición, y recomendamos usar composición en lugar de herencia para reutilizar código entre componentes.

En esta sección consideraremos algunos problemas en los que los desarrolladores nuevos en React a menudo emplean herencia, y mostraremos cómo los podemos resolver con composición.

## Contención

Algunos componentes no conocen sus hijos de antemano. Esto es especialmente común para componentes como Sidebar o Dialog que representan “cajas” genéricas.

Recomendamos que estos componentes usen la prop especial children para pasar elementos hijos directamente en su resultado:

```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

## Especialización

A veces pensamos en componentes como “casos concretos” de otros componentes. Por ejemplo, podríamos decir que un WelcomeDialog es un caso concreto de Dialog.

En React, esto también se consigue por composición, en la que un componente más “específico” renderiza uno más “genérico” y lo configura con props:

```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}
```




[<- Volver al índice](./../README.md)
