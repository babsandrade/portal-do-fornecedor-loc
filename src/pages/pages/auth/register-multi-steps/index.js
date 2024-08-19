// ** MUI Components
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Demo Components Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import RegisterMultiStepsWizard from 'src/views/pages/auth/register-multi-steps'

// ** Styled Components
const RegisterMultiStepsIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 550,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12)
}))

const LeftWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(12),
  '& .img-mask': {
    left: 0
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 470
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))

const RegisterMultiSteps = () => {
  // ** Hooks
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Box className='content-right' sx={{ backgroundColor: 'customColors.bodyBg' }}>
      {!hidden ? (
        <LeftWrapper>
          <Box sx={{ top: 26, left: 26, display: 'flex', position: 'absolute', alignItems: 'center' }}>
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
            <Typography sx={{ ml: 2.5, fontWeight: 600, lineHeight: '24px', fontSize: '1.375rem' }}>
              {themeConfig.templateName}
            </Typography>
          </Box>
          <RegisterMultiStepsIllustration
            alt='register-multi-steps-illustration'
            src='/images/pages/auth-v2-register-multi-steps-illustration.png'
          />
          <FooterIllustrationsV2
            height={350}
            className='img-mask'
            image={`/images/pages/auth-v2-register-multi-steps-mask-${theme.palette.mode}.png`}
          />
        </LeftWrapper>
      ) : null}
      <RightWrapper>
        <Box sx={{ maxWidth: 700 }}>
          <RegisterMultiStepsWizard />
        </Box>
      </RightWrapper>
    </Box>
  )
}
RegisterMultiSteps.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default RegisterMultiSteps
