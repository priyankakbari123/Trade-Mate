import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useState } from "react";

export default function StockChart(props: any) {
  const { data, buySellIndicators } = props;
  // const [showFlags, setShowFlags] = useState(false); //display flags when showFlags is true

  // Initialize state for controlling the displayed flags
  const [displayedFlags, setDisplayedFlags] = useState<number>(0);

  // Filter the data based on the latest flag clicked
  const filteredData = data.filter(
    (item: any) => item.timestamp <= buySellIndicators[displayedFlags].timestamp
  );
  const filterIndicators = buySellIndicators.slice(0, displayedFlags + 1);

  const chartOptions = {
    title: {
      text: "Stock Chart",
    },
    scrollbar: {
      enabled: true,
    },
    series: [
      {
        type: "line",
        name: "Stock Price",
        data: filteredData.map((item: any) => [item.timestamp, item.price]),
        color: "red",
      },
      // {
      //   type: "line",
      //   name: "new stock Stock Price",
      //   data: data.map((item: any) => [item.timestamp, item.price + 20]),
      //   color: "blue",
      // },
      {
        type: "flags",
        // name: "Buy/Sell Indicators",
        data: filterIndicators.map((indicator: any) => ({
          x: indicator.timestamp,
          y: indicator.price,
          title: indicator.action.toUpperCase(),
          text: `$${indicator.price.toFixed(2)}`,
          shape: "squarepin",
          fillColor: indicator.action === "buy" ? "#28a745" : "#dc3545",
        })),
        onSeries: "Stock Price",
        shape: "squarepin",
        width: 20,
        // visible: showFlags,
      },
    ],
    xAxis: {
      type: "datetime",
      title: {
        text: "Time",
      },
    },
    yAxis: {
      title: {
        text: "Price ",
      },
    },
    rangeSelector: {
      allButtonsEnabled: true,
      enabled: true,
      buttonTheme: "responsive",
      buttons: [
        // {
        //   type: "day",
        //   count: 1,
        //   text: "1D",
        // },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        // {
        //   type: "week",
        //   count: 1,
        //   text: "1W",
        // },
        {
          type: "all",
          text: "All",
        },
        {
          type: "all",
          text: "BUY/SELL",
          // events: {
          //   click: function () {
          //     setShowFlags(true);
          //   },
          // },
        },
      ],
      inputEnabled: true,
      selected: 3, // Default to showing all data
    },
  };

  const handleButtonClick = () => {
    setDisplayedFlags(displayedFlags + 1);
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <div>
        <button onClick={() => handleButtonClick()}>Display Next</button>
      </div>
    </>
  );
}
// {buySellIndicators.map((indicator: any, index: number) => (
//   <button key={index} onClick={() => handleButtonClick(index)}>
//     Show till Flag {index + 1}
//   </button>
// ))}
