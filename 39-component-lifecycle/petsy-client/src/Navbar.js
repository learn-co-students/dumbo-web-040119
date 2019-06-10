import React from 'react'
import SearchBar from './SearchBar'
import AccountControlModule from './AccountControlModule'

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <div onClick={() => this.props.changeView("home")}>
          <img 
            className="logo" 
            src="https://image.flaticon.com/icons/png/512/34/34872.png"
            alt="logo"
          />
        </div>
        <SearchBar changeFilter={this.props.changeFilter} />
        <AccountControlModule changeView={this.props.changeView} />
      </div>
    )
  }
}

export default Navbar