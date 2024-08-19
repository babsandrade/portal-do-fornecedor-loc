import { React } from 'react'
import Box from '@mui/material/Box'

import { Typography } from '@mui/material'

const MainHeader = ({ title, actionContent }) => {
  return (
    <Box
      sx={{
        p: 3,
        pb: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#003566',
        margin: '15px',
        borderRadius: '7px'
      }}
    >
      <Typography sx={{ color: '#fff', fontSize: '18px' }}>{title}</Typography>
      {actionContent}
    </Box>
  )
}

export default MainHeader
