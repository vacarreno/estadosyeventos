import React from 'react'

export default function BotonDisminuir({disminuir}) {
  return (
    <button onClick={disminuir} className="btn btn-outline-warning border border-warning" type="button">
    (-)
</button>
  )
}
