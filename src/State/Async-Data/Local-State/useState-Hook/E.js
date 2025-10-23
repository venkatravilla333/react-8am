import React from 'react'
import G from './G'

function E(props) {
  return (
    <div>
      <G name={props.name} updateState={props.updateState} />
    </div>
  )
}

export default E