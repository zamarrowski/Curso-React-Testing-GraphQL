# Introducción a JSX

## JSX

```jsx
const element = () => <h1>¡Hola Fictizia!</h1>
```

El código mostrado arriba, a simple vista, puede parecer raro. No es ni HTML, ni es un string es JSX. Básicamente es una extensión de la sintáxis de JavaScript y es la manera más como de desarrollar en React. No es obligatorio pero podríamos decir que todo el mundo que hace React utiliza JSX.

Esta idea de meter el HTML dentro de JavaScript es muy criticada pero se basa en el concepto de que la lógica de la interfaz de usuario esta intrínsecamente unida a la lógica de renderizado. De esta forma tenemos un componente que contiene en un solo fichero JavaScript el maquetado y la lógica.

[Charla explicando el por qué de JSX en profundidad](https://www.youtube.com/watch?v=x7cQ3mrcKaY)

## Diferencias en cuanto al HTML clásico

Hay algunos atributos de las etiquetas HTML que cambian:

* class: en React hay que escribir **className**
* onclick: en React hay que escribir **onClick**
* A los atributos se les puede pasar funciones, objetos, texto, expresiones...

## Renderizando variables en JSX

En el siguiente ejemplo tenemos una variable llamada `name` la cual la usamos dentro de JSX envolviéndola entre llaves:

```js
const name = 'Fictizia'
const element = () => <h1>¡Hola {name}!</h1>
```

No solo se pueden renderizar variables sino todo tipo de expresiones dentro de las llaves:

* Funciones:

```js
const getName = (user) => user.name
const element = () => <h1>¡Hola {getName()}!</h1>
```

* Ternarias:

```js
const age = 18
const element = () => <h1>¡Hola {age > 18 ? 'adulto' : 'joven'}!</h1>
```

Realmente JSX representa objetos de JavaSript pero [Babel](https://babeljs.io/) compila el JSX a una función de React llamada `createElement()`.

```jsx
const element = () => <h1>¡Hola Fictizia!</h1>
```

Sería igual a esto:

```jsx
const element = React.createElement(
  'h1',
  null,
  '¡Hola Fictizia!'
);
```

Puedes comprobarlo visitando este [link](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4BCgCRAQEMYAxAS2CjoC87KBCbAegMICggA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.0&externalPlugins=)

## Ejercicios:

1. Entrar en [BabelJS](https://babeljs.io/repl) y probar a un escribir un componente que tenga una clase llamada `title`. Revisar qué salida nos da BabelJS despues del compilado.



[<- Volver al índice](./../README.md)