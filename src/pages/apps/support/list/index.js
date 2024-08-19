// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/notifications/list/TableHeader'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Button, Divider } from '@mui/material'
import MainButton from 'src/components/button/mainButton'
import SecondaryButton from 'src/components/button/secondaryButton'
import MainHeader from 'src/components/table/mainHeader'
import FlagDialog from 'src/components/dialog/flagDialog'
import { columns } from 'src/views/apps/support/list/columns'
import FilterMenu from 'src/components/table/filterTable'
import FormDialog from 'src/components/dialog/formDialog'
import SupportWizardForm from './wizard-form'

/* eslint-disable */
const CustomInput = forwardRef((props, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates
  return <CustomTextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})

/* eslint-enable */
const NotificationsList = () => {
  // ** State
  const [dates, setDates] = useState([])
  const [value, setValue] = useState('')
  const [statusValue, setStatusValue] = useState('')
  const [endDateRange, setEndDateRange] = useState(null)
  const [selectedRows, setSelectedRows] = useState([])
  const [startDateRange, setStartDateRange] = useState(null)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)
  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = val => {
    setValue(val)
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
  }

  const handleOnChangeRange = dates => {
    const [start, end] = dates
    if (start !== null && end !== null) {
      setDates(dates)
    }
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <MainHeader title='Atendimento' addButtonIcon='plus' addButtonHref='/apps/invoice/add' />{' '}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <FilterMenu anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick}>
                <Grid item xs={12} sm={12}>
                  <CustomTextField fullWidth label='Código do Serviço' placeholder='Código do Serviço' value={value} />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <CustomTextField label='Descrição' fullWidth placeholder='Descrição' value={value} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <SecondaryButton>Limpar Filtros</SecondaryButton>
                  <MainButton>Filtrar</MainButton>
                </Grid>
              </FilterMenu>
              <FormDialog
                dialogButtonText={
                  <Button variant='tonal' color='primary' aria-haspopup='true'>
                    <Icon icon='tabler:alert-triangle' /> Solicitar Atendimento
                  </Button>
                }
                dialogTitle='ABERTURA DE ATENDIMENTO'
                dialogContent={<SupportWizardForm />}
              />{' '}
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <DataGrid
              className='tableHeaderStyles'
              autoHeight
              pagination
              rowHeight={62}
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              onRowSelectionModelChange={rows => setSelectedRows(rows)}
            />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default NotificationsList
