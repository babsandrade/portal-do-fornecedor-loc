import React from 'react'
import { Grid, Typography } from '@mui/material'
import FlagDialog from 'src/components/dialog/flagDialog'

const OSDetails = () => {
    
return (
                    
                    <Grid container spacing={5}>
                      <Grid item xs={12}>
                        <FlagDialog flagText='Autorização para Reembolso' />
                        <Typography variant='body1'>Número da Ordem de Serviço: 1242299</Typography>
                        <Typography variant='body1'>
                          {' '}
                          CENTRAL COOPERATIVA DOS PRODUTORES RURAIS DE MINAS GERAIS LTDA
                        </Typography>
                        <Typography variant='body1'>Board: RVA8E82</Typography>
                        <Typography variant='body1'>Model: Corolla Xei 2.0 Flex 16v Aut.</Typography>
                        <Typography variant='body1'>Km: 82.368</Typography>
                        <Typography variant='body1'>Data da Ordem de Serviço: 03/04/2024</Typography>
                        <Typography variant='body1'>Total a ser Reembolsado: R$0,00</Typography>
                        <FlagDialog flagText='Itens da Ordem de Serviço' />
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <Typography variant='body2'>
                                <strong>Serviços</strong>
                              </Typography>
                              <Typography variant='body2'>FELT</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant='body2'>
                                <strong>Quantidade</strong>
                              </Typography>
                              <Typography variant='body2'>1</Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography variant='body2'>
                                <strong>Valor do Item</strong>
                              </Typography>
                              <Typography variant='body2'>R$0,00</Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant='body2'>
                                <strong>Tipo do Item</strong>
                              </Typography>
                              <Typography variant='body2'>Não reembolsável</Typography>
                            </Grid>
                            <Grid item xs={3}>
                              <Typography variant='body2'>
                                <strong>Economic group</strong>
                              </Typography>
                              <Typography variant='body2'>06.03.01 - Revit. Prep.</Typography>
                            </Grid>
                          </Grid>
                          <FlagDialog flagText='Comentários' />
                          <Typography variant='body2'>
                            REVITALIZAÇÃO <br />
                            IMPORTANTE: Citar no campo de observações da NF o número da PLACA do veículo e desta O.S.
                            Serão aceitas NF emitidas até o 3º dia útil de cada mês. Qualquer informação que não esteja
                            em conformidade com o autorizado nesta O.S. não será pago até a correção.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid >
                    )
}

export default OSDetails