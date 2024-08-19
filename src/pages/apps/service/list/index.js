import { useState, useEffect, forwardRef } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'src/store/apps/invoice'
import CustomTextField from 'src/@core/components/mui/text-field'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import MainButton from 'src/components/button/mainButton'
import SecondaryButton from 'src/components/button/secondaryButton'
import MainHeader from 'src/components/table/mainHeader'
import { columns } from 'src/views/apps/service/list/columns'
import { Button, Menu, MenuIcon } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import FilterMenu from 'src/components/table/filterTable'

const CustomInput = forwardRef((props, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return <CustomTextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})

const ServiceList = () => {
  const [dates, setDates] = useState([])
  const [value, setValue] = useState('')
  const [statusValue, setStatusValue] = useState('')
  const [endDateRange, setEndDateRange] = useState(null)
  const [selectedRows, setSelectedRows] = useState([])
  const [startDateRange, setStartDateRange] = useState(null)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [anchorEl, setAnchorEl] = useState(null)

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
            <MainHeader title='Serviços' />
            <FilterMenu anchorEl={anchorEl} handleClose={handleClose} handleClick={handleClick}>
              <Grid item xs={12} sm={12}>
                <CustomTextField
                  fullWidth
                  label='Código do Contrato'
                  placeholder='Código do Contrato'
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomTextField
                  fullWidth
                  label='Placa'
                  placeholder='Placa'
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <CustomTextField
                  fullWidth
                  label='Status'
                  select
                  placeholder='Select Status'
                  SelectProps={{ value: statusValue || '', onChange: e => handleStatusValue(e) }}
                >
                  <MenuItem value=''>Nenhum</MenuItem>
                  <MenuItem value='Aberta'>Aberta</MenuItem>
                  <MenuItem value='Fechada'>Fechada</MenuItem>
                </CustomTextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <DatePicker
                  isClearable
                  selectsRange
                  monthsShown={2}
                  endDate={endDateRange}
                  selected={startDateRange}
                  startDate={startDateRange}
                  shouldCloseOnSelect={false}
                  id='date-range-picker-months'
                  onChange={handleOnChangeRange}
                  placeholderText='Selecione um período'
                  customInput={
                    <CustomInput
                      label='Período'
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

export default ServiceList
