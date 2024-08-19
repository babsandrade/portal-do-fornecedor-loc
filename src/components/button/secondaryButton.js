import React from 'react'
import Button from '@mui/material/Button'

const SecondaryButton = ({ children, onClick, fullwidth, disabled }) => {
  return (
    <Button
      disabled={disabled}
      variant='tonal'
      color='primary'
      onClick={onClick}
      style={{ width: fullwidth ? '100%' : 'auto' }}
    >
      <span style={{ color: disabled ? '#BABABA' : '#003566' }}>{children}</span>
    </Button>
  )
}

export default SecondaryButton
