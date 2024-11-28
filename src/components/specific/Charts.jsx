import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  plugins,
} from "chart.js";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      // display:false,
      grid: {
        display: false,
      },
    },

    y: {
      // display:false,
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: "true",
        backgroundColor: "rgba(75,12,192,0.2)",
        borderColor: "rgba(75,12,192,1)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },
};

const DoughnutChart = ({value=[], labels=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats vs Group Chats",
        backgroundColor: ["rgba(75,12,192,0.2)", "orange"],
        borderColor: ["rgba(75,12,192,1)", "orange"],
        offset:30
      },
    ],
  };

  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
