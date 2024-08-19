import { Box, Typography } from '@mui/material'
import FileUploader from 'src/components/fileUploader/fileUploader'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import Icon from 'src/@core/components/icon'
import styled from '@emotion/styled'
import Link from 'next/link'
import Tooltip from '@mui/material/Tooltip'
import ServiceDetails from './service-details'

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
    field: 'code',
    minWidth: 80,
    headerName: 'Código',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.code || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'description',
    minWidth: 120,
    headerName: 'Descrição',
    renderCell: ({ row }) => {
      const { serviceDescription } = row

      return (
        <Tooltip title={<div>{serviceDescription}</div>}>
          <CustomAvatar skin='light' color='primary' sx={{ width: '1.875rem', height: '1.875rem' }}>
            <Icon icon='tabler:file-type-doc' />
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.1,
    field: 'type',
    minWidth: 170,
    headerName: 'Tipo',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.type || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'reason',
    minWidth: 110,
    headerName: 'Motivo',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.reason || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'plate',
    minWidth: 90,
    headerName: 'Placa',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.plate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'model',
    minWidth: 190,
    headerName: 'Modelo',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.model || ''}`}</Typography>
    )
  },
  {
    flex: 0.15,
    minWidth: 140,
    field: 'scheduleDate',
    headerName: 'Agendamento',
    headerClassName: 'super-app-theme--header',

    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>
        {row.issuedDate}
      </Typography>
    )
  },
  {
    flex: 0.1,
    field: 'confirmation',
    minWidth: 130,
    headerName: 'Confirmação',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.confirmation || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'situation',
    headerName: 'Situação',
    renderCell: ({ row }) => {
      return row.invoiceStatus !== 'Aberta' ? (
        <CustomChip rounded size='small' skin='light' color='success' label='Fechada' />
      ) : (
        <CustomChip rounded size='small' skin='light' color='warning' label='Aberta' />
      )
    }
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
              dialogContent: <ServiceDetails />,
              dialogTitle: 'Detalhes do serviço',
              secondaryButtonText: 'Fechar',
              icon: <Icon icon='tabler:eye' fontSize={20} />
            },
            {
              text: 'Anexo',
              dialogContent: <FileUploader />,
              dialogTitle: 'Adicionar anexos',
              secondaryButtonText: 'Fechar',
              primaaryButtonText: 'Enviar',
              icon: <Icon icon='tabler:paperclip' fontSize={20} />
            }
          ]}
        />
      </Box>
    )
  }
]