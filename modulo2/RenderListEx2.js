import React from 'react'

const users = [{ name: 'Sergio', age: 28 }, { name: 'Victoria', age: 27 }, { name: 'Iván', age: 30 }, { name: 'Liviu', age: 26 }]


export default () =>
  <ul>
    {users.map((user, key) => <li key={key}>{user.name} - {user.age}</li>)}
  </ul>