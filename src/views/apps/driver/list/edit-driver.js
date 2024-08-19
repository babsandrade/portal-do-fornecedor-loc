import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Chip from '@mui/material/Chip'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const EditDriver = () => {
    const [date, setDate] = useState(null)
    const [category, setCategory] = useState([])
    
    const handleChange = event => {
    const {
      target: { value }
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    }
    
    return (
            <DatePickerWrapper>
       <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <Typography variant='body2' sx={{ fontWeight: 600 }}>
                          1. Dados Pessoais
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='Nome' placeholder='Nome Completo' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='CPF' placeholder='999.999.999-99' />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <CustomTextField fullWidth label='RG' placeholder='99.999.999-9' />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <CustomTextField fullWidth label='Órgão emissor do RG' />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <CustomTextField fullWidth label='Cidade Nascimento' />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <DatePicker
                          selected={date}
                          showYearDropdown
                          showMonthDropdown
                          customInput={<CustomTextField fullWidth label='Data de nascimento' autoComplete='off' />}
                          onChange={date => setDate(date)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='Celular' />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <CustomTextField fullWidth label='Email' />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant='body2' sx={{ fontWeight: 600 }}>
                          2. Dados CNH
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField fullWidth label='Nº CNH' />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField fullWidth label='Nº Segurança CNH' />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField fullWidth label='Nº de Registro' />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField
                          select
                          fullWidth
                          label='Categoria'
                          SelectProps={{
                            multiple: true,
                            value: category,
                            onChange: e => handleChange(e),
                            renderValue: selected => (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map(value => (
                                  <Chip key={value} label={value} />
                                ))}
                              </Box>
                            )
                          }}
                        >
                          <MenuItem value='A'>A</MenuItem>
                          <MenuItem value='B'>B</MenuItem>
                          <MenuItem value='C'>C</MenuItem>
                          <MenuItem value='D'>D</MenuItem>
                          <MenuItem value='E'>E</MenuItem>
                        </CustomTextField>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField fullWidth label='Órgão emissor da CNH' />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <CustomTextField fullWidth label='Município emissor da CNH' />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <DatePicker
                          selected={date}
                          showYearDropdown
                          showMonthDropdown
                          placeholderText='MM-DD-AAAA'
                          customInput={
                            <CustomTextField fullWidth label='Data da primeira habilitação' autoComplete='off' />
                          }
                          onChange={date => setDate(date)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <DatePicker
                          selected={date}
                          showYearDropdown
                          showMonthDropdown
                          placeholderText='MM-DD-AAAA'
                          customInput={<CustomTextField fullWidth label='Emissão' autoComplete='off' />}
                          onChange={date => setDate(date)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <DatePicker
                          selected={date}
                          showYearDropdown
                          showMonthDropdown
                          placeholderText='MM-DD-AAAA'
                          customInput={<CustomTextField fullWidth label='Validade' autoComplete='off' />}
                          onChange={date => setDate(date)}
                        />
                      </Grid>
                    </Grid>
                </DatePickerWrapper>

    )
}

export default EditDriver