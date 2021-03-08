<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: ['Desktops', 'Tablets'],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ['#556ee6', '#ebeff2'],
            hoverBackgroundColor: ['#556ee6', '#ebeff2'],
            hoverBorderColor: '#fff',
          },
        ],
      },
      {
        maintainAspectRatio: true,
      }
    )
  },
}
</script>