import React from 'react'
import { Card } from 'semantic-ui-react'
import TaskDetails from './TaskDetails'
import EditForm from './EditForm'

class Task extends React.Component {
  state = {
    editing: false
  }

  editClickEvent = event => this.setState({ editing: !this.state.editing })

  render() {
    const {task, completeTask, deleteTask, patchTask} = this.props
    return (
      <Card>
        { this.state.editing
          ? <EditForm
              task={task}
              editClickEvent={this.editClickEvent}
              patchTask={patchTask}
            />
          : <TaskDetails
              task={task}
              editClickEvent={this.editClickEvent}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
        }
      </Card>
    );
  }
}

export default Task;
