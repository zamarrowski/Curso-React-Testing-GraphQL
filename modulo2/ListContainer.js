import React from 'react'
import List from './List'
import InputText from './InputText'
import AddTaskButton from './AddTaskButton'

class ListContainer extends React.Component {

  state = {
    tasks: [{
      id: 10001,
      title: 'Comprar el pan'
    }, {
      id: 10002,
      title: 'Sacar a India'
    }],
    newTaskText: ''
  }

  handleNewTaskText = e => {
    this.setState({ newTaskText: e.target.value })
  }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { id: Math.random(), title: this.state.newTaskText }],
      newTaskText: '',
    })
  }

  removeTask = taskId => {
    let newTasks = this.state.tasks.filter(task => task.id !== taskId)
    this.setState({ tasks: newTasks })
  }

  editTask = (taskId, value) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === taskId) task.title = value
      return task
    })
    this.setState({ tasks: newTasks })
  }

  render() {
    return (
      <>
        <List tasks={this.state.tasks} onRemove={this.removeTask} onEdit={this.editTask} />
        <InputText onChange={this.handleNewTaskText} value={this.state.newTaskText} />
        <AddTaskButton onAdd={this.addTask} />
      </>
    )
  }

}

export default ListContainer