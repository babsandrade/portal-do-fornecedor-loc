// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/apps/invoice'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import MainButton from 'src/components/button/mainButton'
import SecondaryButton from 'src/components/button/secondaryButton'
import MainHeader from 'src/components/table/mainHeader'
import { columns } from 'src/views/apps/maintenance/list/columns'
import FilterMenu from 'src/components/table/filterTable'

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
const MaintenanceList = () => {
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
            <MainHeader title='Manutenção' addButtonIcon='plus' addButtonHref='/apps/invoice/add' />{' '}
            <FilterMenu anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick}>
              <Grid item xs={12} sm={12}>
                <CustomTextField fullWidth label='Contrato' placeholder='Contrato' value={value} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomTextField fullWidth label='Situação' placeholder='Situação' value={value} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomTextField fullWidth label='Placa' placeholder='Placa' value={value} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomTextField fullWidth label='Tipo de Item' placeholder='Tipo de Item' value={value} />
              </Grid>
              <Grid item xs={12} sm={12}>
                <DatePicker
                  fullWidth
                  isClearable
                  selectsRange
                  monthsShown={2}
                  endDate={endDateRange}
                  selected={startDateRange}
                  startDate={startDateRange}
                  shouldCloseOnSelect={false}
                  id='date-range-picker-months'
                  onChange={handleOnChangeRange}
                  placeholderText='Data de Atualização'
                  customInput={
                    <CustomInput
                      label='Tipo de Item'
                      dates={dates}
                      setDates={setDates}
                      end={endDateRange}
                      start={startDateRange}
                    />
                  }
                />
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

export default MaintenanceList
