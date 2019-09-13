# Componentes y propiedades

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos que describen lo que debe aparecer en la pantalla.

## Componente funcionales

La forma más sencilla de definir un componente es escribir una función de JavaScript:

```js
const Welcome = (props) => <h1>Hola, {props.name}</h1>
```

Esta función es un componente de React válido porque acepta un solo argumento de objeto “props” (que proviene de propiedades) con datos y devuelve un elemento de React. Llamamos a dichos componentes “funcionales” porque literalmente son funciones JavaScript.

## Componentes de clase

También puedes utilizar una clase de ES6 para definir un componente:


```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Las clases tienen algunas características adicionales que veremos en las próximas secciones. Hasta entonces, usaremos componentes funcionales por su brevedad.

## Accediendo a los hijos

Se puede acceder a los hijos de un componente a través de las `props` usando `props.children`

## Restricciones

Las props son de solo lectura. Ya sea que declares un componente como una función o como una clase, este nunca debe modificar sus props. Considera esta función sum :

```js
function sum(a, b) {
  return a + b
}
```

Tales funciones son llamadas “puras” por que no tratan de cambiar sus entradas, y siempre devuelven el mismo resultado para las mismas entradas.

En contraste, esta función es impura por que cambia su propia entrada:

```js
function withdraw(account, amount) {
  account.total -= amount
}
```

React es bastante flexible pero tiene una sola regla estricta:

**Todos los componentes de React deben actuar como funciones puras con respecto a sus props.**

¿Entonces como cambio dinámicamente lo que muestra un componente?

En la siguiente sección, introduciremos un nuevo concepto de “estado”. El estado le permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a acciones del usuario, respuestas de red y cualquier otra cosa, sin violar esta regla.

**Ejercicios:**

1. Dado el siguiente código HTML:

```html
<h1>Necesito partir en componentes todo esto</h1>
<p>Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:</p>
<ul>
  <li>Observar el HTML</li>
  <li>Pensar en como puedo extraer cada trozo en componentes</li>
  <li>Usarlos en React</li>
</ul>

<a href="https://reactjs.org/">React Docs</a>
```
Debemos crear los siguientes componentes y que se muestre en React como debería:
* Title
* Text
* List
* ListItem
* Link: debemos poder elegir por la prop `openInNewTab` si queremos que se abra en una nueva ventana o no.

2. Crear un componente llamado `Loading` que si su prop `show` es es verdadera muestre sus hijos. Si es falsa muestre un mensaje: `Loading...`. **Utilizar como hijos el ejercicio anterior.**

3. Seguir los siguientes pasos:
    1. Crear un fichero llamado `Child.js` en el exportar un componente que va a ser una etiqueta `button` que como prop va a recibir una llamada `onPress` que se la asignaremos a la funcion `onClick` del botón.
    2. Crear un componente llamado `Parent.js` que renderizará el componente `Child` y le pasará por `props` una función que se encargará de escribir en la consola el siguiente mensaje: `Hola a todos!`.

[<- Volver al índice](./../README.md)
