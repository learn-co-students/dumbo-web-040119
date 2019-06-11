import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => {
            return <Sushi eaten={props.eaten} key={sushi.id} eatSushi={props.eatSushi} sushi={sushi}/>
          })
        }
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer