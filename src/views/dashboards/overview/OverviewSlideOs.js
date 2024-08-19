// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import OverviewChartOS from './OverviewChartOS'

const data = [
  {
    title: 'Visão Mensal',
    img: '/images/cards/graphic-illustration-1.png',
    details: {
      Abertas: '280',
      Fechadas: '3.1k',
      'Abertas no mês': '1.2k',
      'Fechadas no mês': '200'
    }
  },
  {
    title: 'Visão Anual',
    img: '/images/cards/graphic-illustration-2.png',
    details: {
      'Abertas no ano': '18k',
      'Fechadas no ano': '12k',
      Canceladas: '127',
      Arquivadas: '2.3k'
    }
  },
  {
    title: `OS's abertas no mês corrente`,
    img: '/images/cards/graphic-illustration-3.png',
    details: {
      Direct: '268',
      Organic: '890',
      Referral: '62',
      Campaign: '1.2k'
    }
  }
]

const Slides = ({ theme }) => {
  return (
    <>
      {data.map((slide, index) => {
        return (
          <Box
            key={index}
            className='keen-slider__slide'
            sx={{ p: 6, '& .MuiTypography-root': { color: 'common.white' } }}
          >
            <Typography variant='h5' sx={{ mb: 0.5 }}>
              Os's{' '}
            </Typography>
            <Typography variant='body2' sx={{ mb: 4.5 }}>
              Média total de 28.5% de conversão em serviços
            </Typography>
            {slide.title === `OS's abertas no mês corrente` ? (
              <Grid container>
                <Grid item md={12} sm={12} lg={12}>
                  <Typography variant='h6' sx={{ mb: 4.5 }}>
                    {slide.title}
                  </Typography>
                  <OverviewChartOS />
                </Grid>
              </Grid>
            ) : (
              <Grid container>
                <Grid item xs={12} sm={8} sx={{ order: [2, 1] }}>
                  <Typography variant='h6' sx={{ mb: 4.5 }}>
                    {slide.title}
                  </Typography>
                  <Grid container spacing={4.5}>
                    {Object.keys(slide.details).map((key, index) => {
                      return (
                        <Grid item key={index} xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CustomAvatar
                              color='primary'
                              variant='rounded'
                              sx={{
                                mr: 2,
                                width: 48,
                                height: 30,
                                fontWeight: 500,
                                color: 'common.white',
                                backgroundColor: 'primary.dark'
                              }}
                            >
                              {slide.details[key]}
                            </CustomAvatar>
                            <Typography noWrap>{key}</Typography>
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    order: [1, 2],
                    textAlign: 'center',
                    '& img': {
                      height: '160px !important',
                      maxWidth: 'none !important',
                      [theme.breakpoints.up('sm')]: {
                        top: '50%',
                        position: 'absolute',
                        right: theme.spacing(6),
                        transform: 'translateY(-50%)'
                      }
                    }
                  }}
                >
                  <img src={slide.img} alt={slide.title} />
                </Grid>
              </Grid>
            )}
          </Box>
        )
      })}
    </>
  )
}

const OverviewSlideOs = () => {
  // ** States
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // ** Hook
  const theme = useTheme()

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      rtl: theme.direction === 'rtl',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [
      slider => {
        let mouseOver = false
        let timeout

        const clearNextTimeout = () => {
          clearTimeout(timeout)
        }

        const nextTimeout = () => {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <Card sx={{ position: 'relative', backgroundColor: 'primary.main' }}>
      {loaded && instanceRef.current && (
        <Box className='swiper-dots' sx={{ top: 4, right: 6, position: 'absolute' }}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <Badge
                key={idx}
                variant='dot'
                component='div'
                className={clsx({ active: currentSlide === idx })}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                sx={{
                  mr: `${theme.spacing(3.5)} !important`,
                  '& .MuiBadge-dot': {
                    width: '8px !important',
                    height: '8px !important',
                    backgroundColor: `${hexToRGBA(theme.palette.common.white, 0.4)} !important`
                  },
                  '&.active .MuiBadge-dot': {
                    backgroundColor: `${theme.palette.common.white} !important`
                  }
                }}
              />
            )
          })}
        </Box>
      )}
      <Box ref={sliderRef} className='keen-slider'>
        <Slides theme={theme} />
      </Box>
    </Card>
  )
}

export default OverviewSlideOs
