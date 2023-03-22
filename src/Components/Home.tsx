import React from "react";
import StockChart from "./StockChart";

export default function Home() {
  const data_ = [
    { timestamp: Date.parse("2016-01-04"), price: 100 },
    { timestamp: Date.parse("2016-01-05"), price: 110 },
    { timestamp: Date.parse("2016-01-06"), price: 120 },
    { timestamp: Date.parse("2016-01-07"), price: 130 },
    { timestamp: Date.parse("2016-01-08"), price: 140 },
    { timestamp: Date.parse("2016-01-09"), price: 150 },
    { timestamp: Date.parse("2016-01-10"), price: 160 },
    { timestamp: Date.parse("2016-01-11"), price: 100 },
    { timestamp: Date.parse("2016-01-12"), price: 110 },
    { timestamp: Date.parse("2016-01-13"), price: 120 },
    { timestamp: Date.parse("2016-01-14"), price: 130 },
    { timestamp: Date.parse("2016-01-15"), price: 140 },
    { timestamp: Date.parse("2016-01-16"), price: 150 },
    { timestamp: Date.parse("2016-01-17"), price: 160 },
    { timestamp: Date.parse("2016-02-11"), price: 100 },
    { timestamp: Date.parse("2016-02-12"), price: 110 },
    { timestamp: Date.parse("2016-02-13"), price: 120 },
    { timestamp: Date.parse("2016-02-14"), price: 130 },
    { timestamp: Date.parse("2016-02-15"), price: 140 },
    { timestamp: Date.parse("2016-02-16"), price: 150 },
    { timestamp: Date.parse("2016-02-17"), price: 160 },
    { timestamp: Date.parse("2016-03-11"), price: 100 },
    { timestamp: Date.parse("2016-03-12"), price: 110 },
    { timestamp: Date.parse("2016-03-13"), price: 120 },
    { timestamp: Date.parse("2016-03-14"), price: 130 },
    { timestamp: Date.parse("2016-03-15"), price: 140 },
    { timestamp: Date.parse("2016-03-16"), price: 150 },
    { timestamp: Date.parse("2016-03-17"), price: 160 },
    { timestamp: Date.parse("2016-04-11"), price: 100 },
    { timestamp: Date.parse("2016-04-12"), price: 110 },
    { timestamp: Date.parse("2016-04-13"), price: 120 },
    { timestamp: Date.parse("2016-04-14"), price: 130 },
    { timestamp: Date.parse("2016-04-15"), price: 140 },
    { timestamp: Date.parse("2016-04-16"), price: 150 },
    { timestamp: Date.parse("2016-04-17"), price: 160 },
    { timestamp: Date.parse("2016-05-11"), price: 100 },
    { timestamp: Date.parse("2016-05-12"), price: 110 },
    { timestamp: Date.parse("2016-05-13"), price: 120 },
    { timestamp: Date.parse("2016-05-14"), price: 130 },
    { timestamp: Date.parse("2016-05-15"), price: 140 },
    { timestamp: Date.parse("2016-05-16"), price: 150 },
    { timestamp: Date.parse("2016-05-17"), price: 160 },
  ];
  const buySellIndicators = [
    { timestamp: Date.parse("2016-01-05"), action: "buy", price: 110 },
    { timestamp: Date.parse("2016-01-09"), action: "buy", price: 150 },
    { timestamp: Date.parse("2016-01-10"), action: "sell", price: 160 },
    { timestamp: Date.parse("2016-01-11"), action: "buy", price: 100 },
    { timestamp: Date.parse("2016-01-17"), action: "sell", price: 160 },
    { timestamp: Date.parse("2016-04-14"), action: "sell", price: 130 },
  ];
  return (
    <div style={{ margin: "30px" }}>
      <StockChart data={data_} buySellIndicators={buySellIndicators} />
    </div>
  );
}
