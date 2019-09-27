# División del código

# Bundling

La mayoría de las aplicaciones React tendrán sus archivos “empaquetados” o bundled con herramientas como Webpack, Rollup o Browserify. El bundling es el proceso de seguir los archivos importados y fusionarlos en un archivo único: un bundle o “paquete”. Este bundle se puede incluir en una página web para cargar una aplicación completa de una sola vez.

Ejemplo:
**App:**

```js
// app.js
import { add } from './math.js';

console.log(add(16, 26)); // 42
```
```js
// math.js
export function add(a, b) {
  return a + b;
}
```
**Bundle:**
```js
function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

Si usas Create React App, Next.js, Gatsby, o una herramienta similar, vas a tener una configuración de Webpack incluida para generar el bundle de tu aplicación.

## División de código
El Bundling es genial, pero a medida que tu aplicación crezca, tu bundle también crecerá. Especialmente si incluyes grandes bibliotecas de terceros. Necesitas vigilar el código que incluyes en tu bundle, de manera que no lo hagas accidentalmente tan grande que tu aplicación se tome mucho tiempo en cargar.

Para evitar terminar con un bundle grande, es bueno adelantarse al problema y comenzar a dividir tu bundle. División de código es una funcionalidad disponible en bundlers como Webpack y Browserify (vía factor-bundle) que puede crear múltiples bundles a ser cargados dinámicamente durante la ejecución de tu aplicación.

## import()

La mejor manera de introducir división de código en tu aplicación es a través de la sintaxis de import() dinámico.

**Antes:**
```js
import { add } from './math';

console.log(add(16, 26));
```
**Después:**

```js
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

[<- Volver al índice](./../README.md)
