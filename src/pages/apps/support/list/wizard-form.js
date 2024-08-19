// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import FileUploader from 'src/components/fileUploader/fileUploader'

const steps = [
  {
    title: 'Dados do Veículo'
  },
  {
    title: 'Dados do Cliente'
  },
  {
    title: 'Anexos'
  }
]

const defaultAccountValues = {
  contract: '',
  type: '',
  plate: '',
  km: ''
}

const defaultPersonalValues = {
  phone: '',
  cellphone: '',
  email: '',
  'first-name': '',
  local: '',
  department: '',
  date: '',
  hour: '',
  request: ''
}

const accountSchema = yup.object().shape({
  type: yup.string(),
  contract: yup.string(),
  plate: yup.string(),
  km: yup.string()
})

const personalSchema = yup.object().shape({
  phone: yup.string(),
  cellphone: yup.string(),
  email: yup.string(),
  'first-name': yup.string(),
  local: yup.string(),
  department: yup.string(),
  date: yup.string(),
  hour: yup.string(),
  request: yup.string()
})

const SupportWizardForm = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0)

  // ** Hooks
  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    defaultValues: defaultAccountValues,
    resolver: yupResolver(accountSchema)
  })

  const { handleSubmit: handleSocialSubmit } = useForm({
    resolver: yupResolver(personalSchema)
  })

  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    defaultValues: defaultPersonalValues,
    resolver: yupResolver(personalSchema)
  })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    accountReset({ contract: '', type: '', plate: '' })
    personalReset({ country: '', language: [], 'last-name': '', 'first-name': '' })
  }

  const onSubmit = () => {
    setActiveStep(activeStep + 1)
    if (activeStep === steps.length - 1) {
      toast.success('Form Submitted')
    }
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <form key={0} onSubmit={handleAccountSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[0].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[0].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='type'
                  control={accountControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      label='Tipo'
                      onChange={onChange}
                      error={Boolean(accountErrors.type)}
                      aria-describedby='stepper-linear-account-type'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='contract'
                  control={accountControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      label='Contrato'
                      onChange={onChange}
                      error={Boolean(accountErrors.contract)}
                      aria-describedby='stepper-linear-account-contract'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='plate'
                  control={accountControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      label='Placa'
                      onChange={onChange}
                      id='stepper-linear-account-plate'
                      error={Boolean(accountErrors.plate)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='km'
                  control={accountControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      label='KM Atual'
                      onChange={onChange}
                      id='stepper-linear-account-plate'
                      error={Boolean(accountErrors.plate)}
                    />
                  )}
                />{' '}
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='tonal' color='secondary' disabled>
                  Voltar
                </Button>
                <Button type='submit' variant='contained'>
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 1:
        return (
          <form key={1} onSubmit={handlePersonalSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[1].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[1].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  name='first-name'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      label='Nome'
                      onChange={onChange}
                      error={Boolean(personalErrors['first-name'])}
                      aria-describedby='stepper-linear-personal-first-name'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  name='email'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Email'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['email'])}
                      aria-describedby='stepper-linear-personal-email'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='phone'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Telefone Fixo'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['phone'])}
                      aria-describedby='stepper-linear-personal-phone'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='cellphone'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Telefone Celular'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['cellphone'])}
                      aria-describedby='stepper-linear-personal-cellphone'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='local'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Local de Atendimento'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['last-name'])}
                      aria-describedby='stepper-linear-personal-last-name'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='department'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Departamento'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['last-name'])}
                      aria-describedby='stepper-linear-personal-last-name'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='date'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Data de Agendamento Desejada'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['last-name'])}
                      aria-describedby='stepper-linear-personal-last-name'
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name='hour'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Horário de Agendamento Desejado'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['last-name'])}
                      aria-describedby='stepper-linear-personal-last-name'
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Controller
                  name='request'
                  control={personalControl}
                  render={({ field: { value, onChange } }) => (
                    <CustomTextField
                      fullWidth
                      label='Solicitação do Cliente'
                      value={value}
                      onChange={onChange}
                      error={Boolean(personalErrors['last-name'])}
                      aria-describedby='stepper-linear-personal-last-name'
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='tonal' color='primary' onClick={handleBack}>
                  Voltar
                </Button>
                <Button type='submit' variant='contained'>
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 2:
        return (
          <form key={2} onSubmit={handleSocialSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[2].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[2].subtitle}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <FileUploader />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='tonal' color='primary' onClick={handleBack}>
                  Voltar
                </Button>
                <Button type='submit' variant='contained'>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      default:
        return null
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>Solicitação enviada!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' onClick={handleReset}>
              Nova solicitação
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return getStepContent(activeStep)
    }
  }

  return (
    <>
      <StepperWrapper>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {}
            if (index === activeStep) {
              labelProps.error = false
              if ((accountErrors.contract || accountErrors.type || accountErrors.plate) && activeStep === 0) {
                labelProps.error = false
              } else if (
                (personalErrors.country ||
                  personalErrors.language ||
                  personalErrors['last-name'] ||
                  personalErrors['first-name']) &&
                activeStep === 1
              ) {
                labelProps.error = false
              } else {
                labelProps.error = false
              }
            }

            return (
              <Step key={index}>
                <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                  <div className='step-label'>
                    <Typography className='step-title'>{step.title}</Typography>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>

      <CardContent>{renderContent()}</CardContent>
    </>
  )
}

export default SupportWizardForm
