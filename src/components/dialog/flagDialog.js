import React from 'react'
import Button from '@mui/material/Button'

const FlagDialog = ({ flagText }) => {
  return (
    <div style={{ backgroundColor: '#0035663d', padding: 5, textAlign: 'center', marginTop: 15, marginBottom: 15 }}>
      <span style={{ fontWeight: '600' }}>{flagText}</span>
    </div>
  )
}

export default FlagDialog
