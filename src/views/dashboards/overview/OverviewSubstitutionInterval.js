// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const OverviewSubstitutionInterval = () => {
  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(5)} !important` }}>
        <Box sx={{ gap: 2, mb: 5, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Período de substituição{' '}
            </Typography>
          </div>
          <CustomAvatar skin='light' variant='rounded' sx={{ height: 34, width: 34 }}>
            <Icon icon='tabler:arrows-exchange' fontSize='1.125rem' />
          </CustomAvatar>
        </Box>

        <Box sx={{ py: 2.25, display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
          <Typography variant='h5'>10 veículo(s)</Typography>
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Atualizado hoje{' '}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default OverviewSubstitutionInterval
