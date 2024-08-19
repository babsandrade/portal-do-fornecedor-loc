import React from 'react'
import { Button, Grid, Menu } from '@mui/material'
import Icon from 'src/@core/components/icon'

const FilterMenu = ({ anchorEl, handleClose, handleClick, children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 15, marginBottom: 15 }}>
      <Button variant='tonal' color='primary' aria-haspopup='true' onClick={handleClick}>
        <Icon icon='tabler:adjustments-horizontal' /> Filtros
      </Button>
      <Menu keepMounted id='basic-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
        <Grid container spacing={6} sx={{ padding: '10px', width: '300px' }}>
          {children}
        </Grid>
      </Menu>
    </div>
  )
}

export default FilterMenu
