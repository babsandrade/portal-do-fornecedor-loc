import React from 'react'
import Button from '@mui/material/Button'

const MainButton = ({ children, onClick, fullwidth }) => {
  return (
    <Button variant='contained' color='secondary' onClick={onClick} style={{ width: fullwidth ? '100%' : 'auto' }}>
      <span style={{ color: '#003566' }}>{children}</span>
    </Button>
  )
}

export default MainButton
