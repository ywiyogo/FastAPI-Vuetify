<script>
/**
 * Discount component
 */
export default {
  props: {
    discsto: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<template>
  <div class="table-responsive mb-0">
    <table class="table table-centered table-nowrap">
      <thead class="thead-light">
        <tr>
          <th>Name</th>
          <th>Term</th>
          <th>Status</th>
          <th>Use</th>
          <th>Period</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in discsto" :key="data.id">
          <td>{{data.name}}</td>
          <td>{{data.term}}</td>
          <td>
            <p 
              class="labelstatus"
              :class=" { 
                'bg-soft-primary text-primary': `${data.status}` === 'Draft',
                'bg-soft-success text-success': `${data.status}` === 'Active',
                'bg-soft-dark text-secondary': `${data.status}` === 'Expired'
                }"
              >
            {{data.status}}
            </p>
          </td>
          <td>{{data.use}}</td>
          <td>{{data.period}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- end table -->
</template>