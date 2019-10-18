# React Lazy y React Suspense

React.lazy() permite definir un componente que es cargado dinámicamente. Esto ayuda a reducir el tamaño del bundle para demorar los componentes de carga que no son usados durante la renderización inicial.

```js
const RedditPosts = React.lazy(() => import('./RedditPosts'))
```

Ten en cuenta que renderizar componentes lazy requiere que haya un componente ```<React.Suspense>``` más alto en el árbol de renderización. Así es como se especifica un indicador de carga.

React.Suspense permite especificar el indicador de carga en caso de que algunos componentes en el árbol más abajo de él todavía no estén listos para renderizarse. Hoy en día, los componentes de carga diferida son el único caso compatible con ```<React.Suspense>```:


```js
<Suspense fallback={<div>Loading...</div>}>
  <RedditPosts />
</Suspense>
```


1. Importar usando lazy el ejercicio número 4 de la sección de los Hooks.


[<- Volver al índice](./../README.md)
