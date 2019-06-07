import React from 'react';
import './App.css';
import { Grid, Header } from 'semantic-ui-react'
import TaskContainer from './containers/TaskContainer'
import Navbar from './components/Navbar'

const tasksIndexUrl = "http://localhost:3000/tasks"

class App extends React.Component {
  state = {
    allTasks: []
  }

  componentDidMount = _ => {
    fetch(tasksIndexUrl)
    .then(res => res.json())
    .then(tasks => this.setTasks(tasks))
  }

  setTasks = tasks => {
    this.setState({
      allTasks: tasks
    })
  }

  completeTask = task => {
    fetch(`${tasksIndexUrl}/${task.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        completed: !task.completed
      })
    })
    .then(res => res.json())
    .then(givenTask => {
      const updatedTasks = this.state.allTasks.map(task => (
        task.id === givenTask.id ? givenTask : task
      ))
      this.setTasks(updatedTasks)
    })
  }

  postTask = task => {
    fetch(tasksIndexUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...task,
        completed: false
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        allTasks: [...this.state.allTasks, data]
      })
    })
  }

  deleteTask = task => {
    fetch(`${tasksIndexUrl}/${task.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then( _ => {
      const filteredTasks = [...this.state.allTasks]
      .filter(oneTask => oneTask.id !== task.id)
      this.setTasks(filteredTasks)
    })
  }

  patchTask = (taskId, updatedTask) => {
    fetch(`${tasksIndexUrl}/${taskId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    .then(res => res.json())
    .then(givenTask => {
      const updatedTasks = this.state.allTasks.map(task => {
        return task.id === givenTask.id ? givenTask : task
      })
      this.setTasks(updatedTasks)
    })
  }

  activeTasks = _ => (
    this.state.allTasks.filter(task => !task.completed)
  )

  completedTasks = _ => (
    this.state.allTasks.filter(task => task.completed)
  )


  render() {
    return (
      <React.Fragment>
        <Navbar postTask={this.postTask}/>
        <div className="container-padding">
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column>
              <Header as='h1'>Active Tasks</Header>
              <TaskContainer
                completeTask={this.completeTask}
                deleteTask={this.deleteTask}
                tasks={this.activeTasks()}
                patchTask={this.patchTask}/>
            </Grid.Column>

            <Grid.Column>
              <Header as='h1'>Completed Tasks</Header>
              <TaskContainer
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
                tasks={this.completedTasks()}
                patchTask={this.patchTask}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
