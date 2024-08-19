import { Icon } from '@iconify/react';
import Link from 'next/link'
import { Box, Typography } from '@mui/material';
import OptionsMenu from 'src/@core/components/option-menu'
import { styled } from '@mui/material/styles'
import UpdateKm from './update-km';

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
    headerName: 'Marca',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.model || 0}`}</Typography>
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
    field: 'currentKM',
    minWidth: 110,
    headerName: 'KM Atual',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.currentKM || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'updateDate',
    minWidth: 190,
    headerName: 'Data de atualização',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'vehicleAge',
    minWidth: 160,
    headerName: 'Idade do Veículo',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.vehicleAge || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'km',
    minWidth: 170,
    headerName: 'Franquia de KM',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.km || ''}`}</Typography>
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
        text: 'Atualizar KM',
        icon: <Icon icon='tabler:edit' fontSize={20} />,
        dialogContent: (
          <UpdateKm/>
        ),
        dialogTitle: 'Atualizar KM',
        secondaryButtonText: 'Salvar'
      }
    ]}
  />
</Box>
      )
    }
  ]