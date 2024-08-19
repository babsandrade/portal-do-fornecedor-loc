
import { Box, Typography } from '@mui/material'
import OptionsMenu from 'src/@core/components/option-menu'
import Icon from 'src/@core/components/icon'
import styled from '@emotion/styled'
import Link from 'next/link'
import NotificationDetails from './notification-details'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))

export const columns = [
    {
    flex: 0.1,
    field: 'id',
    minWidth: 180,
    headerName: 'Código do Serviço',
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
    minWidth: 800,
    headerName: 'Descrição',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${
        row.serviceDescription || 0
      }`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'updateDate',
    minWidth: 190,
    headerName: 'Data e Hora',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
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
                  <>
                    {' '}
                    <NotificationDetails/>
                  </>
                ),
                dialogTitle: 'Detalhes da notificação',
                secondaryButtonText: 'Fechar'
              }
            ]}
          />
        </Box>
      )
    }
  ]