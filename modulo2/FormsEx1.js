import React from 'react'

export default props =>
  <select value={props.value} onChange={props.onChange}>
    {props.items.map(val => (
      <option key={val} value={val}>{val}</option>
    ))}
  </select>