import React, {useState, useEffect} from 'react';
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import {connect} from "react-redux";

const mapState = (state) => {
  return state;
}

const ChartFunc = (props) => {
  let arr = [
    [
      { type: 'date', label: 'День' },
      'Витрати',
      'Доходи',
    ],
  ];
  let existingArrCopy = [];
  
  useEffect(() => {
    const copy = [];
    const el = props.charges.map((el) => {
      return el;
    });
    el.forEach((el) => {
      copy.push([el.date, el.charge, null]);
    });
    existingArrCopy.push(copy.map((el) => el));
    existingArrCopy[0].forEach((el) => {
      arr.push(el);
    });
  })

    const [chartData, setChartData] = useState(
     arr
    );

    useEffect(() => {
      const copy = [...chartData];
      const el = props.charges.slice(-1).map((el) => {
        return el;
      });
      copy.push([el[0].date, el[0].charge, null]);
      setChartData(copy);
    }, []);

    
   
    const data = [
        ["Element", "Density", { role: "style" }],
        ["Mon", 45.6, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"],
        ["Pl", 245, "color: #e5e4e2"],
        ["num", 24.45, "color: #e5e4e2"], 
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"],
        ["Pl", 245, "color: #e5e4e2"],
        ["num", 24.45, "color: #e5e4e2"]// CSS-style declaration
      ];
    return(
        
        <div className="App" >
        <Chart
  width={'center'}
  height={'500px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    chart: {
      title:
        'Графік видатків',
    },
    width: 1000,
    height: 500,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: { axis: 'Temps' },
      1: { axis: 'Daylight' },
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: { label: 'Витрати(ГРН)' },
        Daylight: { label: '' },
      },
    },
  }}
  rootProps={{ 'data-testid': '4' }}
/>
      </div>

    )
};
export const ChartView = connect(mapState, null)(ChartFunc);