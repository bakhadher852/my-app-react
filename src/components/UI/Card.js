import React from 'react'
import './Card.css'
const Card = (props) => {
  //the space after card very important
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}
export default Card
