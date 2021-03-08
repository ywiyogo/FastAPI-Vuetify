<script>
/**
 * Transactions component
 */
export default {
  props: {
    transactions: {
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
          <th style="width: 20px;">
            <div class="custom-control custom-checkbox">
              <input id="customCheck" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" for="customCheck">&nbsp;</label>
            </div>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Order</th>
          <th>Total Spend</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in transactions" :key="data.id">
          <td>
            <div class="custom-control custom-checkbox">
              <input :id="`customCheck${data.index}`" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" :for="`customCheck${data.index}`">&nbsp;</label>
            </div>
          </td>
          <td><router-link tag="a" to="/customer/detail" class="d-block text-primary mb-2">{{data.name}}</router-link></td>
          <td>{{data.email}}</td>
          <td>{{data.location}}</td>
          <td>{{data.order}}</td>
          <td>{{data.spend}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- end table -->
</template>