
import { Icon } from '@iconify/react';
import Link from 'next/link'
import { Box, Typography } from '@mui/material';
import OptionsMenu from 'src/@core/components/option-menu'
import { styled } from '@mui/material/styles'
import OSDetails from './os-details';

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
    field: 'client',
    minWidth: 180,
    headerName: 'Cliente',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.name || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'codeOS',
    minWidth: 130,
    headerName: 'Código OS',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.code || 0}`}</Typography>
    )
  },

  {
    flex: 0.1,
    field: 'dateOS',
    minWidth: 200,
    headerName: 'Data de Abertura OS',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || 0}`}</Typography>
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
    minWidth: 180,
    headerName: 'Código do Serviço',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.code || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'itemType',
    minWidth: 150,
    headerName: 'Tipo de Item',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.itemType || 0}`}</Typography>
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
    field: 'billingNum',
    minWidth: 240,
    headerName: 'Número do Faturamento',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.billingNum || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'billingDate',
    minWidth: 200,
    headerName: 'Data do Faturamento',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.billingDate || ''}`}</Typography>
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
                text: 'Ver detalhes',
                icon: <Icon icon='tabler:eye' fontSize={20} />,
                dialogContent: (
                  <OSDetails/>
                ),
                dialogTitle: 'Detalhes da ordem de serviço',
                secondaryButtonText: 'Fechar'
              }
            ]}
          />
        </Box>
      )
    }
  ]