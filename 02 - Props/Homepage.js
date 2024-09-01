import React from 'react'

export default function Homepage(props) {
    // we can get props this lines as javascript
  return (
    // get a props 
    <div>{props.Name}</div>
  )
}

// set default Props
Homepage.defaultProps={
    Name:"Ravindu",
}

Homepage.prototype={
    Name:prototype.String,
}
