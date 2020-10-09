import React from 'react'
import RemoveTaskButton from './RemoveTaskButton'

export default props =>
  <>
    <li>
      <input
        type="text"
        value={props.task.title}
        onChange={e => props.onEdit(props.task.id, e.target.value)}
      />
    </li>
    <RemoveTaskButton onRemove={() => props.onRemove(props.task.id)} />
  </>