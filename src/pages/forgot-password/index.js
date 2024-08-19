// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// import logoabla from '../../assets/logoabla.png'

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  username: yup.string().required('Necessário informar o usuário'),
  password: yup.string().min(5, 'Senha precisa ter no mínimo 5 caracteres').required('Senha é necessária')
})

const defaultValues = {
  password: 'admin',
  email: 'admin@ablaone.com'
}

const ForgotPassword = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      <div className='loginBackground'>
        <div className='text-center'>
          <img style={{ width: '500px' }} src={'/images/abla/ablalogo.png'} alt='Logo Abla - Portal do Cliente' />
        </div>
      </div>
      <RightWrapper>
        <div className='justify-content-start mb-3 miniLogo'>
          <img src={'/images/abla/minilogo.png'} alt='Mini Logo' style={{ width: '150px', height: 'auto' }} />
        </div>
        <Box className='loginForm'>
          <Box sx={{ my: 6 }}>
            <Typography color='primary' variant='h3' sx={{ mb: 1.5 }}>
              Esqueceu a senha?
            </Typography>
          </Box>
          <Alert
            style={{ width: '400px' }}
            icon={false}
            sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}
          >
            <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
              Caso você não tenha mais acesso à senha informada no primeiro acesso, entre em contato com a ABLA pelo
              email <strong>abla@abla.com.br</strong> para solicitar a atualização no cadastro e gerar uma nova senha.
              Lembre-se que a sua nova senha substituirá a antiga e deverá ser utilizada nos próximos acessos à
              plataforma.{' '}
            </Typography>
          </Alert>

          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
              <LinkStyled href='/login'>
                <span>Voltar ao login</span>
              </LinkStyled>
            </Typography>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>
ForgotPassword.guestGuard = true

export default ForgotPassword
