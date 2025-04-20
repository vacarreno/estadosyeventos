import React from 'react'

export default function BotonIncrementar({incrementar}) {
  return (
    <button onClick={incrementar} className="btn btn-outline-warning border border-warning" type="button">
    (+)
</button>
  )
}
