import React, { Component } from 'react';
import { Form, Card, TextArea, Button } from 'semantic-ui-react'

class EditForm extends Component {
  state = {
    content: this.props.task.content
  }

  submitEvent = event => {
    this.setState({ content: "" })
    this.handleEditClick()
    this.props.patchTask(this.props.task.id, this.state)
  }

  changeEvent = event => this.setState({ content: event.target.value })

  handleEditClick = event => this.props.editClickEvent(this.props.task)

  render() {
    const { task } = this.props

    if (task) {
      return (
        <React.Fragment>
        <Card.Content>
        <Card.Header>
        Task #{task.id}
        </Card.Header>
        <Form onSubmit={this.submitEvent}>
        <Form.Field
        control={TextArea}
        placeholder='Start writing here...'
        value={this.state.content}
        onChange={this.changeEvent}
        />
        <Button.Group>
        <Button color="green">Submit</Button>
        <Button onClick={this.handleEditClick}>Cancel</Button>
        </Button.Group>
        </Form>
        </Card.Content>
        </React.Fragment>
      );
    } else {
      return null
    }

  }

}

export default EditForm;
