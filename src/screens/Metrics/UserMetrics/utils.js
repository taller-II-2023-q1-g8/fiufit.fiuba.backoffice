import Chart from "chart.js/auto";

export const createDoughnutChart = (chartId, labels, data) => {
  const chartCanvas = document.getElementById(chartId);
  if (!chartCanvas) {
    console.error(`Element with ID '${chartId}' not found.`);
    return;
  }
  const existingChart = Chart.getChart(chartCanvas);
  if (existingChart) {
    existingChart.destroy();
  }

  const ctx = chartCanvas.getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ["#FF8A0D", "#c90404", "#0c007a"],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};

export const isLessThan20Days = (date) => {
  var today = new Date();
  var dateToCalculate = new Date(date);

  const diff = today - dateToCalculate;
  const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayDiff <= 20;
};
