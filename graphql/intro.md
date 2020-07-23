# GraphQL

![graphql](https://miro.medium.com/max/1000/1*Fz_DTbJptm_S7GccttSFVw.png)


# ¿Qué es GraphQL?

Es una herramienta desarrollada por **Facebok** que intenta de solucionar un clásico problema que tenemos a la hora de consumir recursos de APIs REST.
Ya hay muchas empresas que lo usan en producción como Facebook, Github, Pinterest, Shopify, Atlassian...

# La problemática

En una API REST se expone un endpoint por recurso, esto implica que hay veces que tendremos que hacer varias llamadas hacia esa API si queremos, por ejemplo, una pantalla en la que se visualicen los datos de un usuario, sus posts y los seguidores que tiene. Para conseguir esto haríamos 3 peticiones, algo así:

* /users/:id
* /users/:id/posts
* users/:id/followers

![rest](https://imgur.com/VRyV7Jh.png)

En GraphQL podemos pedir los datos que necesitamos desde el cliente. Esto nos permite poder pedir toda la información que necesitemos en una sola petición.

![graphql](https://imgur.com/z9VKnHs.png)

# Ventajas

* No se crean endpoints a medida
* No nos traemos datos innecesarios
* Cada aplicación puede pedir los datos que necesite para pintarse adecuadamente
* Las herramientas de desarrollo en torno a GraphQL


# Playground de GraphQL

Podemos practicar a hacer queries sin tener nada montado en nuestro ordenador desde [GraphQLHub](https://www.graphqlhub.com/playground).
Desde éste playground podemos utilizar las APIs de GraphQL que exponen:

* hn: HackerNewsAPI
* hn2: HackerNewsAPIV2
* reddit: RedditAPI
* keyValue: KeyValueAPI
* github: GithubAPI
* twitter: TwitterAPI
* giphy: GiphyAPI

## Ejercicios

1. Utilizando la API de HackerNews v0 obtener de las top stories su url y score
2. Utilizando la API de Twitter obtener el texto de los tuits que hablen sobre "GraphQL"
3. Utilizando la API de Github obtener los commits de los repositorios de @gaearon
4. Arrancar el servidor que hay en `graphql/server` y hacer algunas consultas en `http://localhost:8000/graphql`


[<- Volver al índice](./../README.md)