import React from 'react';
import { Grid } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const UpdateKm = () => {
    return(
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='Placa'
                  placeholder='ABC1C34'
                  inputProps={{ maxLength: 7 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  fullWidth
                  label='KM Atual'
                  placeholder='1234'
                />
              </Grid>
        </Grid>
    )
}

export default UpdateKm;    