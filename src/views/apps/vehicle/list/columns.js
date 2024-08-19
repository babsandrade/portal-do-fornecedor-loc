import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))

export const columns = [
   {
    flex: 0.1,
    field: 'id',
    minWidth: 110,
    headerName: 'Contrato',
    renderCell: ({ row }) => (
      <Typography
        noWrap
        variant='body2'
        component={LinkStyled}
        href={`/apps/invoice/preview/${row.id}`}
      >{`#${row.id}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'plate',
    minWidth: 100,
    headerName: 'Placa',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.plate || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'contractType',
    minWidth: 170,
    headerName: 'Tipo de contrato',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.contractType || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'model',
    minWidth: 200,
    headerName: 'marca',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.model || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'year',
    minWidth: 80,
    headerName: 'Ano',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.year || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'chassi',
    minWidth: 170,
    headerName: 'Chassi',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.chassi || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'renavam',
    minWidth: 110,
    headerName: 'Renavam',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.renavam || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'openDate',
    minWidth: 110,
    headerName: 'Abertura',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'closeDate',
    minWidth: 110,
    headerName: 'Retorno',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.closeDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'km',
    minWidth: 110,
    headerName: 'KM',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.km || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'status',
    minWidth: 110,
    headerName: 'Situação',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.fleetSituation || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'period',
    minWidth: 80,
    headerName: 'Dias',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.days || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'maintenance',
    minWidth: 140,
    headerName: 'Manutenção',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.maintenance || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'driver',
    minWidth: 150,
    headerName: 'Motorista',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.name || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'place',
    minWidth: 200,
    headerName: 'Local',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.address || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'insurance',
    minWidth: 200,
    headerName: 'Seguro Contratado',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.insurance || ''}`}</Typography>
    )
  },
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      field: 'actions',
      headerName: 'Ações',
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <OptionsMenu
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
            options={[
              {
                text: 'Remover Motorista',
                icon: <Icon icon='tabler:trash' fontSize={20} />,
                dialogContent: (
                  <>
                    {' '}
                    <div>
                      Confirma a exclusão do motorista {row.name} associado ao veículo de placa {row.plate}?
                    </div>
                  </>
                ),
                dialogTitle: 'Remover Motorista',
                secondaryButtonText: 'Fechar',
                primaryButtonText: 'Confirmar'
              },
              {
                text: 'Checklist',
                icon: <Icon icon='tabler:pdf' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]
