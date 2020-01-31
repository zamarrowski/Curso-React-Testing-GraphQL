# React Context

Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.

En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de props, pero esto puede ser complicado para ciertos tipos de props (por ejemplo, localización, el tema de la interfaz) que son necesarios para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente un prop a través de cada nivel del árbol.

## Cuándo usar Context

Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido. Por ejemplo, en el código a continuación, pasamos manualmente un prop de “tema” para darle estilo al componente Button:

```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // El componente Toolbar debe tener un prop adicional "theme"
  // y pasarlo a ThemedButton. Esto puede llegar a ser trabajoso
  // si cada botón en la aplicación necesita saber el tema,
  // porque tendría que pasar a través de todos los componentes.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```

Usando Context podemos evitar pasar props a través de elementos intermedios:

```js
// Context nos permite pasar un valor a lo profundo del árbol de componentes
// sin pasarlo explícitamente a través de cada componente.
// Crear un Context para el tema actual (con "light" como valor predeterminado).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Usa un Provider para pasar el tema actual al árbol de abajo.
    // Cualquier componente puede leerlo, sin importar qué tan profundo se encuentre.
    // En este ejemplo, estamos pasando "dark" como valor actual.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Un componente en el medio no tiene que
// pasar el tema hacia abajo explícitamente.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Asigna un contextType para leer el contexto del tema actual.
  // React encontrará el Provider superior más cercano y usará su valor.
  // En este ejemplo, el tema actual es "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

## API

**React.createContext**

```js
const MyContext = React.createContext(defaultValue);
```

Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leerá el valor de contexto actual del Provider más cercano en el árbol.

El argumento defaultValue es usado únicamente cuando un componente no tiene un Provider superior a él en el árbol. Esto puede ser útil para probar componentes de forma aislada sin contenerlos. Nota: pasar undefined como valor al Provider no hace que los componentes que lo consumen utilicen defaultValue.

**Context.Provider**

```js
<MyContext.Provider value={/* algún valor */}>
```

Cada objeto Context viene con un componente Providers de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.

Acepta un prop value que se pasará a los componentes consumidores que son descendientes de este Provider. Un Provider puede estar conectado a muchos consumidores. Los Providers pueden estar anidados para sobreescribir los valores más profundos dentro del árbol.

Todos los consumidores que son descendientes de un Provider se vuelven a renderizar cada vez que cambia el prop value del Provider. La propagación del Provider a sus consumidores descendientes no está sujeta al método shouldComponentUpdate, por lo que el consumidor se actualiza incluso cuando un componente padre evita la actualización.

Los cambios se determinan comparando los valores nuevos y antiguos utilizando el mismo algoritmo que Object.is.

## Actualizando Context desde un componente anidado

A menudo es necesario actualizar el contexto desde un componente que está anidado en algún lugar del árbol de componentes. En este caso, puedes pasar una función a través del contexto para permitir a los consumidores actualizar el contexto:
```js
theme-context.js

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
```
```js
theme-toggler-button.js

import {ThemeContext} from './theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
```
```js
app.js

import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

ReactDOM.render(<App />, document.root);
```


## Ejercicio

1. Crear un context que contenga los datos de un usuario. Añadirlo en el componente padre de la aplicación y mostrarlo en un componente hijo.


[<- Volver al índice](./../README.md)
