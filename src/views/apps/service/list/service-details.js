                  
import React from 'react';  
import { Grid, Typography } from '@mui/material'
import FlagDialog from 'src/components/dialog/flagDialog'

const ServiceDetails = () => {
    return(
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <Typography variant='body1'>Código do Serviço: 56206</Typography>
                        <Typography variant='body1'>Cooperativa Central dos Produtores Rurais</Typography>
                        <Typography variant='body1'>Contrato: 56206</Typography>
                        <Typography variant='body1'>E-mail do solicitante: email@mail.com</Typography>

                        <FlagDialog flagText='Fornecedor' />
                        <Typography variant='body1'>Razão Social: Empresa X</Typography>
                        <FlagDialog flagText='Anexos' />
                        <Typography variant='body1'>Não consta</Typography>
                      </Grid>
        </Grid>
    )
}

export default ServiceDetails; 