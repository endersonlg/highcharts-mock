import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import FullScreen from "highcharts/modules/full-screen.js";
import StockTools from "highcharts/modules/stock-tools.js";
import { xsForecast, xsHistorico, ysForecast, ysHistorico } from "./CabulosaData";

// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

const options = {
  title: {
    text: 'Line'
  },
  xAxis:{
    type:'datetime'
  },
  series: [
    {
      type: "line",
      color:'#81B3FF',
      data:xsHistorico.map((xs,index)=>[
        new Date(xs).getTime(),ysHistorico[index]
      ]),
    },
    {
      type: "line",
      color:'#FFABD3',
      data:xsForecast.map((xs,index)=>[
        new Date(xs).getTime(),ysForecast[index]
      ]),
    },
  ],
  chart:{
    zooming:{
      type:'xy'
    }
  }
};

export const Cabulosa = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={"stockChart"}
    options={options}
  />
);

