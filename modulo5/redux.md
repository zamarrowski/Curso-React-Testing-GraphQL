# Redux

![flow](https://github.com/springload/react-redux-exercise/blob/master/readme/redux1.jpg?raw=true)

Os dejo por [aquí](https://es.slideshare.net/SergioZamarroSnchez/redux-reactadalab) las diapositivas.

```
npm i --save redux react-redux
```

## Ejercicios:

Se trata de hacer un ejercicio final donde podamos practicar todo o casi todo lo que hemos visto. He preparado varias APIs para ayudarnos. El objetivo es hacer una especie de Instagram donde usemos Redux, styled-components y react-router. El estilo de la página es lo menos importante pero nos apoyaremos en styled-components cuando sea necesario:

1. La primera página al entrar debe ser un formulario de login. Para avanzar a la siguiente pantalla (/posts) debe introducir como datos:
    * username: react
    * password: fictizia

2. La página /posts va a tirar de la API: http://www.mocky.io/v2/5db348a0300000650057b5e3
    * Pintar los posts y quien lo ha publicado
    * Mostrar los likes
    * Poder dar like a una foto y que aumente el marcador
    * Mostrar los comentarios y el usuario que lo ha publicado

3. Página de mi perfil (/account)
    * En esta página vamos a mostrar los datos con los que iniciamos sesión

4. Página de perfil de usuario (/profile/:id) va a tirar de la API: http://www.mocky.io/v2/5db34985300000650057b5e8
    * Mostrar los datos que devuelve la API


[<- Volver al índice](./../README.md)
