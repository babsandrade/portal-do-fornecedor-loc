// ** MUI Import
import Grid from '@mui/material/Grid'
import 'chart.js/auto'

// ** Demo Component Imports
import OverviewAverageVehicleAge from 'src/views/dashboards/overview/OverviewAverageVehicleAge'
import OverviewRentedVehicles from 'src/views/dashboards/overview/OverviewRentedVehicles'
import OverviewSubstitutionInterval from 'src/views/dashboards/overview/OverviewSubstitutionInterval'
import OverviewPendingOSs from 'src/views/dashboards/overview/OverviewPendingOSs'
import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports'
import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState'
import OverviewChartOS from 'src/views/dashboards/overview/OverviewChartOS'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import OverviewChartService from 'src/views/dashboards/overview/OverviewChartService'
import OverviewSlideOs from 'src/views/dashboards/overview/OverviewSlideOs'
import OverviewTableCarsByBrand from 'src/views/dashboards/overview/OverviewTableCarsByBrand'
import OverviewTableCarsByModel from 'src/views/dashboards/overview/OverviewTableCarsByModel'
import OverviewTableFinesByLocation from 'src/views/dashboards/overview/OverviewTableFinesByLocation'
import OverviewTableMostFinedCars from 'src/views/dashboards/overview/OverviewTableMostFinedCars'
import OverviewTableFinesByType from 'src/views/dashboards/overview/OverviewTableFinesByType'
import MobilityAPI from 'src/views/dashboards/overview/MobilityAPI'

const OverviewDashboard = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6} className='match-height'>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <AnalyticsOrderVisits />
          </Grid> */}
          {/* <Grid item xs={12} sm={6} lg={3}>
            <CardStatsWithAreaChart
              stats='97.5k'
              chartColor='success'
              avatarColor='success'
              title='Revenue Generated'
              avatarIcon='tabler:credit-card'
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid> */}
          <Grid item xs={12} lg={12}>
            <MobilityAPI />
          </Grid>
          <Grid item xs={12} lg={3}>
            <OverviewAverageVehicleAge />
          </Grid>
          <Grid item xs={12} lg={3}>
            <OverviewRentedVehicles />
          </Grid>
          <Grid item xs={12} lg={3}>
            <OverviewSubstitutionInterval />
          </Grid>
          <Grid item xs={12} lg={3}>
            <OverviewPendingOSs />
          </Grid>
          <Grid item xs={12} md={6}>
            <OverviewChartService />
          </Grid>
          <Grid item xs={12} lg={6}>
            <OverviewSlideOs />
          </Grid>
          <Grid item xs={12} lg={6}>
            <OverviewTableCarsByBrand />
          </Grid>
          <Grid item xs={12} lg={6}>
            <OverviewTableCarsByModel />
          </Grid>
          <Grid item xs={12} lg={6}>
            <OverviewTableFinesByLocation />
          </Grid>
          <Grid item xs={12} lg={6}>
            <OverviewTableMostFinedCars />
          </Grid>
          <Grid item xs={12} lg={12}>
            <OverviewTableFinesByType />
          </Grid>

          {/* <Grid item xs={12} lg={8}>
            <AnalyticsProject />
          </Grid>

          <Grid item xs={12} md={6}>
            <AnalyticsEarningReports />
          </Grid>

          <Grid item xs={12} md={6}>
            <AnalyticsSupportTracker />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSalesByCountries />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsMonthlyCampaignState />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSourceVisits />
          </Grid> */}
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

export default OverviewDashboard
