// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import TableContainer from '@mui/material/TableContainer'
import TableCell from '@mui/material/TableCell'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const MUITableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  '&:not(:last-child)': {
    paddingRight: `${theme.spacing(2)} !important`
  }
}))

const CalcWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const PreviewCard = ({ data }) => {
  // ** Hook
  const theme = useTheme()
  if (data) {
    return (
      <Card>
        <CardContent sx={{ p: [`${theme.spacing(6)} !important`, `${theme.spacing(10)} !important`] }}>
          <Grid container>
            <Grid item sm={4} xs={12} sx={{ mb: { sm: 0, xs: 4 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>                  
                  <Typography variant='h4' sx={{ ml: 2.5, fontWeight: 700, lineHeight: '24px' }}>
                    {themeConfig.templateName}
                  </Typography>
                </Box>
                <div>
                  <Typography sx={{ mb: 2, color: 'text.secondary' }}>Office 149, 450 South Brand Brooklyn</Typography>
                  <Typography sx={{ mb: 2, color: 'text.secondary' }}>San Diego County, CA 91905, USA</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item sm={8} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
                <Table sx={{ maxWidth: '210px' }}>
                  <TableBody sx={{ '& .MuiTableCell-root': { py: `${theme.spacing(1.5)} !important` } }}>
                    <TableRow>
                      <MUITableCell>
                        <Typography variant='h4'>Fatura</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography variant='h4'>{`#${data.invoice.id}`}</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>Data de criação:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>{data.invoice.issuedDate}</Typography>
                      </MUITableCell>
                    </TableRow>
                    <TableRow>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>Data de Vencimento:</Typography>
                      </MUITableCell>
                      <MUITableCell>
                        <Typography sx={{ color: 'text.secondary' }}>{data.invoice.dueDate}</Typography>
                      </MUITableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardContent sx={{ p: [`${theme.spacing(6)} !important`, `${theme.spacing(10)} !important`] }}>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 4 } }}>
              <Typography variant='h6' sx={{ mb: 6 }}>
                Fatura Para:
              </Typography>
              <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{data.invoice.name}</Typography>
              <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{data.invoice.company}</Typography>
              <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{data.invoice.address}</Typography>
              <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{data.invoice.contact}</Typography>
              <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{data.invoice.companyEmail}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: ['flex-start', 'flex-end'] }}>
              <div>
                <Typography variant='h6' sx={{ mb: 6 }}>
                  Cobrança para:
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody sx={{ '& .MuiTableCell-root': { py: `${theme.spacing(0.75)} !important` } }}>
                      <TableRow>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>
                            {data.paymentDetails.totalDue}
                          </Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>Nome do Banco:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>{data.paymentDetails.bankName}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>País:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>{data.paymentDetails.country}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>Agência:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>{data.paymentDetails.iban}</Typography>
                        </MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>Conta:</Typography>
                        </MUITableCell>
                        <MUITableCell>
                          <Typography sx={{ color: 'text.secondary' }}>{data.paymentDetails.swiftCode}</Typography>
                        </MUITableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Descrição</TableCell>
                {/* <TableCell>hours</TableCell> */}
                <TableCell>Qntd</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                '& .MuiTableCell-root': {
                  py: `${theme.spacing(2.5)} !important`,
                  fontSize: theme.typography.body1.fontSize
                }
              }}
            >
              <TableRow>
                <TableCell>Pneu</TableCell>
                <TableCell>Troca de pneu por mal uso</TableCell>
                <TableCell>1</TableCell>
                <TableCell>R$32</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>KM</TableCell>
                <TableCell>Quilometragem excedida</TableCell>
                <TableCell>1</TableCell>
                <TableCell>R$28</TableCell>
              </TableRow>              
            </TableBody>
          </Table>
        </TableContainer>

        <CardContent sx={{ p: [`${theme.spacing(6)} !important`, `${theme.spacing(10)} !important`] }}>
          <Grid container>
            <Grid item xs={12} sm={7} lg={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ mr: 2, fontWeight: 500, color: 'text.secondary' }}>Vendedor:</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Tommy Shelby</Typography>
              </Box>

              <Typography sx={{ color: 'text.secondary' }}>Obrigado por nos escolher!</Typography>
            </Grid>
            <Grid item xs={12} sm={5} lg={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Subtotal:</Typography>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>R$1800</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Desconto:</Typography>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>R$28</Typography>
              </CalcWrapper>
              <CalcWrapper sx={{ mb: '0 !important' }}>
                <Typography sx={{ color: 'text.secondary' }}>Taxa:</Typography>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>21%</Typography>
              </CalcWrapper>
              <Divider sx={{ my: `${theme.spacing(2)} !important` }} />
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>R$1690</Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
    )
  } else {
    return null
  }
}

export default PreviewCard
