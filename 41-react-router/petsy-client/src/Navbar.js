import React from 'react'
import SearchBar from './SearchBar'
import AccountControlModule from './AccountControlModule'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
          <Link to="/home">
            <div>
              <img 
                className="logo" 
                src="https://image.flaticon.com/icons/png/512/34/34872.png"
                alt="logo"
              />
            </div>
          </Link>
        <SearchBar changeFilter={this.props.changeFilter} />
        <AccountControlModule changeView={this.props.changeView} />
      </div>
    )
  }
}

export default withRouter(Navbar)

// Another way to navigate that is more programmitic
// onClick={() => {this.props.history.push("/home")} }