import React, { Fragment } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'

const TaskDetails = ({task, completeTask, deleteTask, editClickEvent}) => {
  const doneClickEvent = event => completeTask(task)
  const deleteClickEvent = event => deleteTask(task)
  const handleEditClick = event => editClickEvent(task)

  return (
    <>

      <Card.Content>
        <Card.Header>
          Task #{task.id}
        </Card.Header>
        <Card.Description>
          {task.content}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Button.Group icon>
          { task.completed
            ? <Button onClick={doneClickEvent}>
                <Icon name='undo'/> Undone
              </Button>
            : <Button positive onClick={(event, domElement) => doneClickEvent(event, event.target)}>
                <Icon name='check'/> Done
              </Button>
          }
          <Button color='blue' onClick={handleEditClick}>
            <Icon name='edit'/> Edit
          </Button>
          <Button negative onClick={deleteClickEvent}>
            <Icon name='trash'/> Delete
          </Button>
        </Button.Group>
      </Card.Content>
    </>
  );
}

export default TaskDetails;
