<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Sales Analytics",
            backgroundColor: "rgba(52, 195, 143, 0.8)",
            borderColor: "rgba(52, 195, 143, 0.8)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
            hoverBorderColor: "rgba(52, 195, 143, 0.9)",
            data: [65, 59, 81, 45, 56, 80, 50, 20]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "rgba(166, 176, 207, 0.1)"
              },
              barPercentage: 0.4
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: "rgba(166, 176, 207, 0.1)"
              }
            }
          ]
        }
      }
    );
  }
};
</script>