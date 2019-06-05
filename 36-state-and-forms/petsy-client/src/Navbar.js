import React from 'react'
import SearchBar from './SearchBar'
import AccountControlModule from './AccountControlModule'

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <div>
          <img 
            className="logo" 
            src="https://image.flaticon.com/icons/png/512/34/34872.png"
            alt="logo"
          />
        </div>
        <SearchBar changeFilter={this.props.changeFilter} />
        <AccountControlModule openCart={this.props.openCart} />
      </div>
    )
  }
}

export default Navbar