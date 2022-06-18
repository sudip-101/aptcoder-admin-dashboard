import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "react-apexcharts";
import "./Home.scss";

const Home: React.FC = () => {
  const LineChart = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  const PieChart = {
    options: {
      dataLabels: {
        enabled: true,
        formatter: (val: any) => {
          return val.toFixed(2) + "%";
        },
      },
    },
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };
  return (
    <section className="home-container">
      <Navbar title="Home" />
      <div className="home-elements">
        <div className="card-boxes">
          <div className="card">
            <p className="card-title">Total Admins</p>
            <p className="card-title-bold">5</p>
          </div>
          <div className="card">
            <p className="card-title">Total Managers</p>
            <p className="card-title-bold">100</p>
          </div>
          <div className="card">
            <p className="card-title">Total Employees</p>
            <p className="card-title-bold">500</p>
          </div>
          <div className="card">
            <p className="card-title">Total Turnover of 2022</p>
            <p className="card-title-bold">
              <i className="fa-solid fa-indian-rupee-sign"></i>36,85,000
            </p>
          </div>
        </div>
        <div className="chart-boxes">
          <div className="chart-card chart-card-graph">
            <Chart
              options={LineChart.options}
              series={LineChart.series}
              type="bar"
              className="chart"
            />
          </div>
          <div className="chart-card chart-card-circle">
            <Chart
              options={PieChart.options}
              series={PieChart.series}
              type="donut"
              className="chart"
            />
          </div>
          <div className="chart-card chart-card-graph">
            <Chart
              options={LineChart.options}
              series={LineChart.series}
              type="line"
              className="chart"
            />
          </div>
          <div className="chart-card chart-card-circle">
            <Chart
              options={PieChart.options}
              series={PieChart.series}
              type="pie"
              className="chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
