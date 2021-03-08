<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ['Desktops', 'Tablets'],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ['#34c38f', '#ebeff2'],
            hoverBackgroundColor: ['#34c38f', '#ebeff2'],
            hoverBorderColor: '#fff',
          },
        ],
      },
      {
        maintainAspectRatio: true,
        responsive: true,
      }
    )
  },
}
</script>