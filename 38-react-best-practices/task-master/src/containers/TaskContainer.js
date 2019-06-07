import React from 'react'
import TaskCard from '../components/TaskCard'
import Search from '../components/Search'
import { Card, Form } from 'semantic-ui-react'

class TaskContainer extends React.Component {
  state = {
    searchTerm: ""
  }

  changeEvent = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  formatCards = givenTasks => {
    const {completeTask, deleteTask, patchTask} = this.props
    return this.filtration(givenTasks)
    .map(task => <TaskCard
      completeTask={completeTask}
      deleteTask={deleteTask}
      patchTask={patchTask}
      key={task.id}
      task={task}/>
    )
  }

  filtration = givenTasks => (
    givenTasks.filter(task =>
      task.content.toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
    )
  )

  render() {
    return (
      <div>
        <Search changeEvent={this.changeEvent} searchTerm={this.state.searchTerm}/>
        { this.props.tasks.length > 0
          ? <Card.Group>{this.formatCards(this.props.tasks)}</Card.Group>
          : <p>Empty</p>
        }
      </div>
    )
  }

}

export default TaskContainer;
