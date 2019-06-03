import React from 'react';
 
class Header extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div style={{
        color: this.props.color, 
        borderStyle: this.props.bordered ? "solid" : "none"
      }}> 
        <h1>{this.props.greeting}! -{this.props.name}</h1>
        <p>Same thing!!</p>
        {this.props.children}
      </div>
    )
  }
}

// function Header (props){
//   return (
//     <div> 
//       <h1>{props.greeting}! -{props.name}</h1>
//       <p>Same thing!!</p>
//     </div>
//   )
// }

export default Header