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
import MobilityAPI from 'src/views/dashboards/overview/MobilityAPI'

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

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { username, password } = data

    const params = {
      username,
      password,
      rememberMe,
      grant_type: 'password'
    }
    setIsLoading(true)
    auth.login(params, () => {
      setError('email', {
        type: 'manual',
        message: 'Username or Password is invalid'
      })
      setIsLoading(false)
    })
  }

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
          <MobilityAPI />

          <Box sx={{ my: 6 }}>
            <Typography color='primary' variant='h3' sx={{ mb: 1.5 }}>
              Entre com sua conta
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Acesso restrito a associados ABLA. </Typography>
          </Box>
          <Alert
            style={{ width: '400px' }}
            icon={false}
            sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}
          >
            <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
              Caso ainda não possua suas credenciais de acesso entre em contato com <strong>abla@abla.com.br</strong>.{' '}
            </Typography>
          </Alert>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <Controller
                  name='username'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='Usuário'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='admin@ablaone.com'
                      error={Boolean(errors.username)}
                      {...(errors.username && { helperText: errors.username.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Senha'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label='Lembre-se de mim'
                  control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                />
                <Typography component={LinkStyled} href='/forgot-password'>
                  Esqueceu sua senha?
                </Typography>
              </Box>
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }} disabled={isLoading}>
                {isLoading ? 'Autenticando...' : 'Acessar'}
              </Button>

              <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                ou acesse
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='http://abla.one' component={Link} target='blank'>
                  <svg width='34' height='29' viewBox='0 0 33 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16.84 0.37793L30.767 24.7369C30.767 24.7369 28.7837 23.3848 24.0954 21.7009C19.4071 20.017 14.578 19.6939 14.578 19.6939H22.1242L16.8153 10.4972L10.2248 21.7772C12.2795 21.6269 17.0905 21.9651 20.9493 22.9298C27.3382 24.527 31.6382 27.4384 32.5871 28.0693C32.6674 28.1167 32.7227 28.1533 32.7529 28.1769C32.721 28.1579 32.6654 28.1214 32.5871 28.0693C31.5817 27.4737 26.6854 25.148 18.7944 24.6838C10.2748 24.1826 2.40675 27.4402 0.75293 28.1918L16.84 0.37793Z'
                      fill='url(#paint0_linear_304_6)'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M16.7526 0.37793C16.7813 0.37793 16.8099 0.378018 16.8385 0.378178L13.1543 6.75302C10.1425 8.12115 8.03945 11.1437 8.03945 14.6596C8.03945 14.9207 8.06537 15.1941 8.08969 15.4512L8.09431 15.5009L4.40021 21.8843C3.16121 19.7708 2.43262 17.2848 2.43262 14.6596C2.43262 6.77208 8.84385 0.37793 16.7526 0.37793ZM20.5305 6.83179L16.8387 0.378178C24.7078 0.424408 31.0725 6.80074 31.0725 14.6596C31.0725 17.2743 30.3448 19.7402 29.1149 21.8482L25.4254 15.3948L25.4256 15.3932C25.4447 15.1574 25.4659 14.9003 25.4659 14.6596C25.4659 11.213 23.447 8.23669 20.5305 6.83179ZM19.4855 18.2255L16.7962 13.5674L14.1068 18.2255H19.4855Z'
                      fill='url(#paint1_linear_304_6)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_304_6'
                        x1='5.44895'
                        y1='26.1312'
                        x2='18.9871'
                        y2='12.2629'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#001D3D' />
                        <stop offset='1' stop-color='#003566' />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_304_6'
                        x1='6.58848'
                        y1='17.6498'
                        x2='16.9093'
                        y2='5.41213'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#FFC300' />
                        <stop offset='1' stop-color='#FFD60A' />
                      </linearGradient>
                    </defs>
                  </svg>
                </IconButton>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
