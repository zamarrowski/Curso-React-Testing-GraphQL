# GraphQL

![graphql](https://miro.medium.com/max/1000/1*Fz_DTbJptm_S7GccttSFVw.png)


## ¿Qué es GraphQL?

Es una herramienta desarrollada por **Facebok** que intenta de solucionar un clásico problema que tenemos a la hora de consumir recursos de APIs REST.
Ya hay muchas empresas que lo usan en producción como Facebook, Github, Pinterest, Shopify, Atlassian...

## La problemática

En una API REST se expone un endpoint por recurso, esto implica que hay veces que tendremos que hacer varias llamadas hacia esa API si queremos, por ejemplo, una pantalla en la que se visualicen los datos de un usuario, sus posts y los seguidores que tiene. Para conseguir esto haríamos 3 peticiones, algo así:

* /users/:id
* /users/:id/posts
* users/:id/followers

![rest](https://imgur.com/VRyV7Jh.png)

En GraphQL podemos pedir los datos que necesitamos desde el cliente. Esto nos permite poder pedir toda la información que necesitemos en una sola petición.

![graphql](https://imgur.com/z9VKnHs.png)

## Ventajas

* No se crean endpoints a medida
* No nos traemos datos innecesarios
* Cada aplicación puede pedir los datos que necesite para pintarse adecuadamente
* Las herramientas de desarrollo en torno a GraphQL


## Playground de GraphQL

Existe un repositorio llamado [GraphQL Apis](https://github.com/APIs-guru/graphql-apis) en el que podemos encontrar una lista de APIs hechas con GraphQL y probarlas.

## Ejercicios

1. Utilizando la API de [Countries](https://countries.trevorblades.com/) obtener de los países su `code` y `emoji`
2. Utilizando la API de [Countries](https://countries.trevorblades.com/) obtener el `name` y `native` del país con `code` "ES"
3. Utilizando la API de [Countries](https://countries.trevorblades.com/) obtener las capitales de todos los continentes
4. Utilizando la API de [Countries](https://countries.trevorblades.com/) obtener las capitales del continente con `code` "EU"
5. Arrancar el servidor que hay en `graphql/server` y hacer algunas consultas en `http://localhost:8000/graphql`


[<- Volver al índice](./../README.md)