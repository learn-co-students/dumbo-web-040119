import React from 'react'
// ↑ ↓ 😀 😞 😐

class Ticker extends React.Component {

  state = {
    color: "black",
    arrow: "-"
  }

  componentDidUpdate(prevProps, prevState){
    // console.log("NEW PROPS", this.props)
    // console.log("OLD PROPS", prevProps)

    if(this.props.value > prevProps.value){
      // change color to green
      this.setState({
        color: "green",
        arrow: "↑"
      })
    } else if (this.props.value < prevProps.value){
      // change color to red
      this.setState({
        color: "red",
        arrow: "↓"
      })
    } 

    // why could it be a problem to setState inside of a componentDidUpdate?
  }


  render(){
    return (
      <div style={{color: this.state.color}} className="box">
        <h1>{this.props.value} {this.state.arrow}</h1>
      </div>
    );
  }
}

export default Ticker