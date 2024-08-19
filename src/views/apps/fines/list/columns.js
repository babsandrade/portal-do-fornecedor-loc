import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Icon from 'src/@core/components/icon';
import FileUploader from 'src/components/fileUploader/fileUploader';
import OptionsMenu from 'src/@core/components/option-menu';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

const FakeNames = [
  'João da Silva',
  'Maria Santos',
  'Pedro Oliveira',
  'Ana Souza',
  'Lucas Pereira'
];

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))

const CustomSelectField = ({ selectedName, handleChange }) => (
  <Grid item xs={12} sm={12}>
    <FormControl fullWidth>
      <InputLabel id='select-condutor-label'>Condutor</InputLabel>
      <Select
        labelId='select-condutor-label'
        id='select-condutor'
        value={selectedName}
        onChange={handleChange}
        label='Condutor'
      >
        {FakeNames.map((name, index) => (
          <MenuItem key={index} value={name}>
            {name} - 000.000.000-00
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);


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
    field: 'fineType',
    minWidth: 140,
    headerName: 'Tipo de Multa',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.plate || 0}`}</Typography>
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
    field: 'model',
    minWidth: 200,
    headerName: 'Marca',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.model || 0}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'updateDate',
    minWidth: 90,
    headerName: 'Data',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'updateHour',
    minWidth: 90,
    headerName: 'Hora',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.openDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'code',
    minWidth: 90,
    headerName: 'Código',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.contract || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'description',
    minWidth: 200,
    headerName: 'Descrição',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${
        row.serviceDescription || ''
      }`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'local',
    minWidth: 150,
    headerName: 'Local',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.address || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'aitNumber',
    minWidth: 120,
    headerName: 'AIT Número',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.aitNumber || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'expirationNumber',
    minWidth: 120,
    headerName: 'Expiração',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.expirationDate || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'dateIdDriver',
    minWidth: 220,
    headerName: 'Data de ID do Motorista',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.idDateDriver || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'name',
    minWidth: 150,
    headerName: 'Condutor',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.name || ''}`}</Typography>
    )
  },
  {
    flex: 0.1,
    field: 'value',
    minWidth: 80,
    headerName: 'Valor',
    renderCell: ({ row }) => (
      <Typography noWrap variant='body2' sx={{ color: 'text.secondary' }}>{`${row.value || ''}`}</Typography>
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
                text: 'FICI',
                icon: <Icon icon='tabler:pdf' fontSize={20} />
              },
              {
                text: 'Inserir novo condutor',
                icon: <Icon icon='mdi:user-add' fontSize={20} />,
              dialogContent: (
          <CustomSelectField />
        ),
        dialogTitle: 'Inserir Condutor',
        secondaryButtonText: 'Salvar'
      },
              {
                text: 'Inserir contrato do condutor',
                icon: <Icon icon='material-symbols:note-add-outline' fontSize={20} />,
                dialogContent: <FileUploader/>,
                dialogTitle: 'Adicionar Anexos',
                secondaryButtonText: 'Fechar'
              },
               {
                text: 'Anexo',
                icon: <Icon icon='tabler:paperclip' fontSize={20} />,
                dialogContent: <FileUploader/>,

                dialogTitle: 'Adicionar Anexos',
                secondaryButtonText: 'Fechar'
              }
            ]}
          />
        </Box>
      )
    }
  ]