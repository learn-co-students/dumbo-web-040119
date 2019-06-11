import React from 'react'

const Sushi = (props) => {

  function handleClick(){
    props.eatSushi(props.sushi)
  }


  // check if eaten array contains this component's sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eaten.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} alt="sush" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi