// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const PreviewActionsService = ({ id, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }) => {
  return (
    <Card>
      <CardContent>
        <Button fullWidth variant='contained' onClick={toggleSendInvoiceDrawer} sx={{ mb: 2, '& svg': { mr: 2 } }}>
          <Icon fontSize='1.125rem' icon='tabler:send' />
          Send Invoice
        </Button>
        <Button fullWidth sx={{ mb: 2 }} color='secondary' variant='contained'>
          Downloadsss
        </Button>
        <Button
          fullWidth
          sx={{ mb: 2 }}
          target='_blank'
          variant='tonal'
          component={Link}
          color='secondary'
          href={`/apps/service/print/${id}`}
        >
          Print
        </Button>
        <Button
          fullWidth
          sx={{ mb: 2 }}
          variant='tonal'
          component={Link}
          color='secondary'
          href={`/apps/service/edit/${id}`}
        >
          Edit Invoice
        </Button>
        <Button fullWidth variant='contained' sx={{ '& svg': { mr: 2 } }} onClick={toggleAddPaymentDrawer}>
          <Icon fontSize='1.125rem' icon='tabler:currency-dollar' />
          Add Payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default PreviewActionsService
