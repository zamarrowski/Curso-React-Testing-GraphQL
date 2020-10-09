import React from 'react'
import ListItem from './ListItem'

export default props =>
  <ul>
    {props.tasks.map(task => (
      <ListItem
        key={task.id}
        task={task}
        onRemove={props.onRemove}
        onEdit={props.onEdit}
      />
    ))}
  </ul>