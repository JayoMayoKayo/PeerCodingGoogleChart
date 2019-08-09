import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import Information from './components/Information/Information.js';

const pieOptions = {
  title: "This is the title",
  
  pieHole: .5,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

class App extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="App">
        <Information />
        <h1 style={{textAlign: 'center'}}>stuff</h1>
        <Chart
          chartType="PieChart"
          data={[["Age", "Weight"], ["a", 12], ["b", 5.5],['c',17],['d',2]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}
export default App;