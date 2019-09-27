# Accesibilidad

React es totalmente compatible con la creación de sitios web accesibles, a menudo mediante el uso de técnicas estándar de HTML.

## Normas y lineamientos

El documento Iniciativa de Accesibilidad Web - Aplicaciones de Internet Enriquecidas y Accesibles (WAI-ARIA por sus siglas en inglés) contiene técnicas para construir widgets de JavaScript totalmente accesibles.

Ten en cuenta que todos los atributos HTML aria- * son totalmente compatibles con JSX. Mientras que la mayoría de las propiedades y atributos de DOM en React son camelCase, estos atributos deben tener un guión (también conocido como kebab-case, lisp-case, etc.) ya que están en HTML simple:

```js
<input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

## HTML semántico

El HTML semántico es la base de la accesibilidad en una aplicación web. Haciendo uso de los diversos elementos HTML para reforzar el significado de la información en nuestros sitios web a menudo nos dará accesibilidad de forma gratuita.

A veces rompemos la semántica HTML cuando agregamos elementos `<div>` a nuestro JSX para hacer que nuestro código React funcione, especialmente cuando trabajamos con listas `(<ol>, <ul> y <dl>)` y la etiqueta `<table>` de HTML. En estos casos, deberíamos usar Fragmentos React para agrupar varios elementos.

Por ejemplo,

```js
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```

Cuando no necesites ninguna prop en la etiqueta Fragment, puedes usar la sintaxis corta, si tus herramientas lo admiten:

```js
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
```

## Formularios accesibles

Todos los controles de formulario HTML, como `<input>` y `<textarea>`, deben ser etiquetados de forma accesible. Necesitamos proporcionar etiquetas descriptivas que también estén expuestas a los lectores de pantalla.

Aunque estas prácticas estándar de HTML se pueden usar directamente en React, ten en cuenta que el atributo for se escribe como htmlFor en JSX:

```js
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
```



[<- Volver al índice](./../README.md)
