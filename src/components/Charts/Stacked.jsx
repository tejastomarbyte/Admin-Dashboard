import React from 'react'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,Category,StackingColumnSeries,Tooltip } from '@syncfusion/ej2-react-charts'
import {stackedPrimaryXAxis,stackedPrimaryYAxis, } from '../../data/dummy'
import { stackedCustomSeries } from './stackedDummydata'
const Stacked = ({width,height}) => {
  return (
      <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}>
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
      </ChartComponent>
    )
}

export default Stacked