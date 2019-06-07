import React, { Fragment } from 'react';

class Something extends React.Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    fetch("any-url")
    .then(response => response.json())
    .then(callback)
  }

  callback = responseData => {
    this.setState({
      data: responseData
    })
  }

  render() {
    return (
      <Fragment>
      <h1>Hi Hello</h1>
      <div>
      rlngsrg
      </div>
      </Fragment>
    );
  }

}

const foo = () => ({ key: value })

const foo = () => {
  return { key: value }
}


foo()




const object = {
  key: "value",
  keyTwo: "hi"
}

const key = "rgerhgerh"

{ ...object, key }






















export default Something;
