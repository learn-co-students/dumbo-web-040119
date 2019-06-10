import React from 'react'

class AccountControlModule extends React.Component {
  render(){
    return (
      <div className="account-controls">
        <button onClick={() => this.props.changeView("sell")}>Sell on Petsy</button>
        <button>
          <img className="button-icon" src="https://maxcdn.icons8.com/app/uploads/2016/03/treasure_chest-1.png" alt="icon"/><br/>
          Discover
        </button>
        <button>
          <img className="button-icon" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-outline-128.png" alt="icon"/><br/>
          Notifcations
        </button>
        <button>
          <img className="button-icon" src="https://image.flaticon.com/icons/png/128/126/126486.png" alt="icon"/><br/>
          Account
        </button>
        <button onClick={() => this.props.changeView("cart")}>
          <img className="button-icon" src="https://static.thenounproject.com/png/2370-200.png" alt="icon"/><br/>
          Cart
        </button>
      </div>
    )
  }
}

export default AccountControlModule