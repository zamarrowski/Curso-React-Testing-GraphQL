# Pintando listas

Primero, vamos a revisar como transformas listas en Javascript.

Dado el código de abajo, usamos la función map() para tomar un array de numbers y duplicar sus valores. Asignamos el nuevo array devuelto por map() a la variable doubled y la mostramos:

```js
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((number) => number * 2)
console.log(doubled)
```

Este código muestra [2, 4, 6, 8, 10] a la consola.

En React, transformar arrays en listas de elementos es casi idéntico.

```js
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) =>
  <li>{number}</li>
)
```

## Keys

Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable:

```js
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
)
```

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key:

```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

Cuando no tengas IDs estables para renderizar, puedes usar el índice del ítem como una key como último recurso:

```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

No recomendamos usar índices para keys si el orden de los ítems puede cambiar. Esto puede impactar negativamente el rendimiento y puede causar problemas con el estado del componente

## Integrar map() en JSX

JSX permite integrar cualquier expresión en llaves así que podemos alinear el resultado de map():

```js
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      )}
    </ul>
  );
}
```


## Ejercicios:

1. Crear un TODO list que permita añadir, borrar y editar. Debería de haber los siguientes componentes:
    * ListContainer
    * List
    * ListItem
    * InputText
    * AddTaskButton
    * RemoveTaskButton

[<- Volver al índice](./../README.md)

