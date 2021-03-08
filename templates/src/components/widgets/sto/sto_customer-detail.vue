<script>
/**
 * Transactions component
 */
export default {
  props: {
    custdetail: {
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
          <th>Order</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in custdetail" :key="data.id">
          <td><router-link tag="a" to="/customer/detail" class="d-block text-primary mb-2">{{data.id}}</router-link></td>
          <td>{{data.date}}</td>
          <td>{{data.total}}</td>
          <td>{{data.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- end table -->
</template>