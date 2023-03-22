import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

export default function StockChart(props: any) {
  const { data, buySellIndicators } = props;
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
        data: data.map((item: any) => [item.timestamp, item.price]),
      },
      {
        type: "flags",
        // name: "Buy/Sell Indicators",
        data: buySellIndicators.map((indicator: any) => ({
          x: indicator.timestamp,
          y: indicator.price,
          title: indicator.action.toUpperCase(),
          text: `$${indicator.price.toFixed(2)}`,
          shape: "squarepin",
          fillColor: indicator.action === "buy" ? "#28a745" : "#dc3545",
        })),
        onSeries: "Stock Price",
        shape: "squarepin",
        width: 40,      },
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
      // buttons: [
      //   {
      //     type: "day",
      //     count: 1,
      //     text: "1d",
      //   },
      //   {
      //     type: "week",
      //     count: 1,
      //     text: "1w",
      //   },
      //   {
      //     type: "month",
      //     count: 1,
      //     text: "1m",
      //   },
      //   {
      //     type: "all",
      //     text: "All",
      //   },
      // ],
      // buttonTheme: {
      //   width: 60,
      //   height: 20,
      //   stroke: "silver",
      //   strokeWidth: 1,
      //   fill: {
      //     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      //     stops: [
      //       [0.4, "#fff"],
      //       [0.6, "#e0e0e0"],
      //     ],
      //   },
      //   style: {
      //     color: "#333",
      //     fontWeight: "bold",
      //   },
      //   states: {
      //     hover: {
      //       fill: {
      //         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      //         stops: [
      //           [0.4, "#e0e0e0"],
      //           [0.6, "#fff"],
      //         ],
      //       },
      //       style: {
      //         color: "black",
      //       },
      //     },
      //     select: {
      //       fill: {
      //         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      //         stops: [
      //           [0.1, "#c0c0c0"],
      //           [0.3, "#e0e0e0"],
      //         ],
      //       },
      //       style: {
      //         color: "black",
      //       },
      //     },
      //   },
      // },
      allButtonsEnabled: true,
      enabled: true,
      buttonTheme: "responsive",
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "week",
          count: 1,
          text: "1W",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      inputEnabled: true,
      selected: 3, // Default to showing all data
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}
