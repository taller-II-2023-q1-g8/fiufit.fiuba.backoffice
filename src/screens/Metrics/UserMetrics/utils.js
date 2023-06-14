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
          backgroundColor: ["brown", "orange", "blue"],
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