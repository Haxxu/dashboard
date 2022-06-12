import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip, Legend } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Pie' title='Project Cost Breakdown' />
      <AccumulationChartComponent
        id='pie-chart'
        height='420px'
        legendSettings={{ visible: true, background: 'white', position: 'Top' }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Legend]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective 
            name='Sale'
            xName='x'
            yName='y'
            dataSource={pieChartData}
            innerRadius='40%'
            startAngle={0}
            endAngle={360}
            radius='70%'
            explode
            explodeOffset='10%'
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#ffffff',
              }
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie