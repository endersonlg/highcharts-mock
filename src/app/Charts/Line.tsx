"use client"

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

interface LineProps{
  xs:string[]
  ys:number[]
}

export function Line({xs,ys}:LineProps) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  
const options: Highcharts.Options = {
  title: {
    text: 'Line'
  },
  xAxis:{
    type:'datetime'
  },
  series:[
    {
      type:"line",
      data:xs.map((xs,index)=>[
        new Date(xs).getTime(),ys[index]
      ])
    }
  ],
  chart:{
    zooming:{
      type:'xy'
    }
  }
}

  return (
    <main>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </main>
  )
}
