import React from 'react'
import { Input } from 'semantic-ui-react'

// {
//   searchTerm: "",
//   changeEvent: fn
// }
// //
// const searchTerm = ""
// const changeEvent = fn

const Search = ({ searchTerm, changeEvent }) => {
  // Destructuring
  // const { searchTerm, changeEvent } = props

  return (
    <Input
      fluid
      placeholder='Search...'
      value={searchTerm}
      onChange={changeEvent}
      icon={{ name: 'search', link: true }}
    />
  )
}

export default Search;
