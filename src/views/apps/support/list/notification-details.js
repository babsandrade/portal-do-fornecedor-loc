import { Grid, Typography, Divider } from '@mui/material'

const NotificationDetails = () => {
    return (
<Grid container spacing={5}>
                      <Grid item xs={12}>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <Typography variant='body2'>
                              <strong>Campo alterado</strong>
                            </Typography>
                            <Typography variant='body2'>Modificado em</Typography>
                            <Divider sx={{ mt: 5, mb: 5 }} />

                            <Typography variant='body2'>Solução</Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='body2'>
                              <strong>Valor antigo</strong>
                            </Typography>
                            <Typography variant='body2'>06/03/2024 14:34:35</Typography>
                            <Divider sx={{ mt: 5, mb: 5 }} />
                            <Typography variant='body2'>
                              01/02/2024 10:08:43 - remarcado para 02/02 às 08h no mesmo local - Aline Pereira.
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant='body2'>
                              <strong>Valor novo</strong>
                            </Typography>
                            <Typography variant='body2'>03/06/2024 17:29:09</Typography>
                            <Divider sx={{ mt: 5, mb: 5 }} />

                            <Typography variant='body2'>
                              03/06/2024 17:29:09 - Veículo liberado, será devolvido em 03/07 em Codisburgo - Alan
                              Teotonio.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
        </Grid>
    )
}

export default NotificationDetails