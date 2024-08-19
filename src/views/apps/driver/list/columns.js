// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import EditDriver from './edit-driver'

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
    headerName: 'Condutor',
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
    field: 'name',
    minWidth: 80,
    headerName: 'Nome',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.name || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'cpf',
    minWidth: 120,
    headerName: 'CPF',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.cpf || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'rg',
    minWidth: 120,
    headerName: 'RG',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.rg || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'cnh',
    minWidth: 120,
    headerName: 'CNH',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.cnh || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'cnhCategory',
    minWidth: 170,
    headerName: 'Categoria CNH',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.cnhCategory || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'expirecnh',
    minWidth: 110,
    headerName: 'Validade CNH',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.expireCnh || ''}`}</Typography>
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
                text: 'Editar',
                icon: <Icon icon='tabler:edit' fontSize={20} />,
                dialogContent: (
                  <>
                    {' '}
                    <EditDriver/>
                  </>
                ),
                dialogTitle: 'Editar condutor',
                secondaryButtonText: 'Voltar',
                primaryButtonText: 'Salvar'
              }
            ]}
          />
        </Box>
      )
    }
  ]