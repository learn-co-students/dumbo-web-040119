import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = ({ searchTerm, changeEvent }) => (
  <Input
    fluid
    placeholder='Search...'
    value={searchTerm}
    onChange={changeEvent}
    icon={{ name: 'search', link: true }}
  />
)

export default Search;
