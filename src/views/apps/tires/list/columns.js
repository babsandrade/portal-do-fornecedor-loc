import { Box, Typography } from '@mui/material'
import FileUploader from 'src/components/fileUploader/fileUploader'
import OptionsMenu from 'src/@core/components/option-menu'
import Icon from 'src/@core/components/icon'
import styled from '@emotion/styled'
import Link from 'next/link'
import OSDetails from './os-details'

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
    field: 'tireModel',
    minWidth: 200,
    headerName: 'Modelo do Pneu',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.tireModel || 0}`}</Typography>
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
    field: 'itemType',
    minWidth: 130,
    headerName: 'Tipo de Item',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.itemType || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'currentKM',
    minWidth: 100,
    headerName: 'KM Atual',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.currentKM || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'updateKM',
    minWidth: 180,
    headerName: 'Atualização da KM',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.currentKM || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'openOS',
    minWidth: 160,
    headerName: 'Abertura da OS',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'quantity',
    minWidth: 120,
    headerName: 'Quantidade',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.days || ''}`}</Typography>
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
                text: 'Ver Detalhes',
                icon: (
                    <Icon icon='tabler:eye' />
                ),
                dialogContent: (
                 <OSDetails/>
                ),
                dialogTitle: 'Detalhes da ordem de serviço',
                secondaryButtonText: 'Fechar'
              },
              {
                text: 'Anexo',
                icon: <Icon icon='tabler:paperclip' fontSize={20} />,
                dialogContent: <FileUploader/>,

                dialogTitle: 'Adicionar Anexos',
                secondaryButtonText: 'Fechar'
              }

              // {
              //   text: 'Deletar',
              //   icon: (
              //     <IconButton
              //       size='small'
              //       sx={{ color: 'text.secondary' }}
              //       onClick={() => dispatch(deleteInvoice(row.id))}
              //     >
              //       <Icon icon='tabler:trash' />
              //     </IconButton>
              //   )
              // }
            ]}
          />
        </Box>
      )
    }
  ]
