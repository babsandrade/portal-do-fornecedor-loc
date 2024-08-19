// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const data = [
  { name: 'Aberto(s)', value: 29, color: '#003566' },
  { name: 'Fechado(s)', value: 286, color: '#ffc300' }
]
const RADIAN = Math.PI / 180

const renderCustomizedLabel = props => {
  // ** Props
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill='#fff' textAnchor='middle' dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const OverviewPieChartService = () => {
  return (
    <>
      <Box sx={{ height: 220 }}>
        <ResponsiveContainer>
          <PieChart height={150} style={{ direction: 'ltr' }}>
            <Pie data={data} innerRadius={40} dataKey='value' label={renderCustomizedLabel} labelLine={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 4, justifyContent: 'center' }}>
        <Box
          sx={{
            mr: 6,
            display: 'flex',
            alignItems: 'center',
            '& svg': { mr: 1.5, color: '#003566' }
          }}
        >
          <Icon icon='mdi:circle' fontSize='0.75rem' />
          <Typography variant='body2'>Aberto(s)</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: '#ffc300' } }}>
          <Icon icon='mdi:circle' fontSize='0.75rem' />
          <Typography variant='body2'>Fechado(s)</Typography>
        </Box>
      </Box>
    </>
  )
}

export default OverviewPieChartService
