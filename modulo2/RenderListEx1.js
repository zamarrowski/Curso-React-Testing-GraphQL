import React from 'react'

const users = ['sergio', 'victoria', 'iván', 'liviu']

export default () =>
  <ul>
    {users.map((user, key) => <li key={key}>{user}</li>)}
  </ul>