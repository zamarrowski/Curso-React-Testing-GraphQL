# styled-components

## Instalación

```js
npm install --save styled-components
```

styled-components utiliza los template strings para dar estilos a tus componentes.
Esto elimina el tener que mapear los estilos a los componentes. Es decir, cuando tu defines unos estilos tu estas creando un componente de React con los estilos que hayas definido.

## Ejemplos básicos

Simplemente hay que importar styled:

```js
import styled from 'styled-components'
```

Y después basta con usar styled seguido de una etiqueta HTML:

```js
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

```js
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
```


## Adaptando el estilo según las props:

Al ser un template string de ES6 podemos interpolar expresiones:

```js
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
```

Si queremos agregar estilos en grupo segun una prop debemos usar `css`:

```js
import { css } from 'styled-components'
```

```js
const Button = styled.button`
  background: white;
  color: palevioletred;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
```

## Extendiendo estilos

Podemos extender estilos de otros componentes. La única diferencia es que en vez de usar una etiqueta usaremos dicho componente en styled:

```js
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```

## Animaciones

Se pueden crear animaciones reutilizables de manera sencilla. Simplemente tenemos que usar `keyframes` para después usarla dentro de nuestro componente:

```js
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
```

### Ejercicios:

1. Maquetar un boton con styled-components que pueda ser:
    * Default
    * Success
    * Warning
    * Error
    * Info
2. Crear un grid con 5 columnas donde se use cada uno de los botones anteriores
3. Usar el `src/logo.svg` y crear una animación que haga rotar el logo