// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import { Typography } from '@mui/material'

const TableHeader = props => {
  // ** Props
  const { value, selectedRows, handleFilter } = props

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
        borderRadius: '4px'
      }}
    >
      <Typography sx={{ color: '#fff' }} variant='h6'>
        Frota{' '}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button sx={{ mb: 2, backgroundColor: '#fff' }} component={Link} variant='contained' href='/apps/invoice/add'>
          <Icon icon='tabler:plus' style={{ color: '#003566' }} />{' '}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
