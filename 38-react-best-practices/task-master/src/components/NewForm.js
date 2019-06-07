import React from 'react'
import { Form, TextArea, Button, Modal, Menu } from 'semantic-ui-react'

class NewForm extends React.Component {
  state = {
    content: "",
    toggleForm: false
  }

  submitEvent = event => {
    this.setState({
      content: "",
      toggleForm: false
    })
    this.props.postTask({content: this.state.content})
  }

  changeEvent = event => {
    this.setState({content: event.target.value})
  }

  togglePostForm = event => {
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  }

  render() {
    return (
      <Modal trigger={<Menu.Item onClick={this.togglePostForm}>Create a New Task</Menu.Item>}
        open={this.state.toggleForm}
        onClose={this.togglePostForm}>
        <Modal.Header>Create a New Task</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.submitEvent}>
            <Form.Field
            width="twelve"
            control={TextArea}
            label='Description'
            placeholder='Start writing here...'
            value={this.state.content}
            onChange={this.changeEvent}
            />
              <Button color="green">Submit</Button>
              <Button onClick={this.togglePostForm}>Cancel</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

// <React.Fragment>
//   <Header as="h1">Make a New Task</Header>
//   <Form onSubmit={this.submitEvent}>
//     <Form.Field
//     width="twelve"
//     control={TextArea}
//     label='Description'
//     placeholder='Start writing here...'
//     value={this.state.content}
//     onChange={this.changeEvent}
//     />
//     <Form.Field control={Button}>Submit</Form.Field>
//   </Form>
// </React.Fragment>

export default NewForm;
