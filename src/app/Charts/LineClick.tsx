"use client"

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef, useState } from 'react';

interface LineProps{
  xs:string[]
  ys:number[]
}

export function LineClick({xs,ys}:LineProps) {
  const [value,setValue] = useState('click')
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  Highcharts.addEvent(Highcharts.Point, 'click', function (serie) {
    //@ts-expect-error: ignora
    setValue(`${new Date(serie.point.options.x).toISOString()} - ${serie.point.options.y}`)
  });

  console.log(value)

  
const options: Highcharts.Options = {
  title: {
    text: 'Text click'
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
      <strong style={{textAlign:'center',display:'block'}}>{value}</strong>
    </main>
  )
}
