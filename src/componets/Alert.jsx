

import React from 'react'
import {Alert as Alerta} from 'react-bootstrap';

const Alert = (mensaje) => {
  return (
    <Alerta variant="danger">{mensaje}</Alerta>
  )
}

export default Alert