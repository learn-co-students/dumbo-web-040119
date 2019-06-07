import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import NewForm from './NewForm'

const Navbar = ({postTask}) => (
  <Menu inverted>
    <Menu.Item>
      <Header as="h2" inverted>TaskMaster</Header>
    </Menu.Item>
    <NewForm postTask={postTask}/>
  </Menu>
)

export default Navbar;
