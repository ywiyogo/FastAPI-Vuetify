<script>
import { formatRupiah } from '../../utils/formatter';
import NO_IMAGE from '../../assets/images/product/no-image.png';
import { baseDomain } from '../../repositories/Clients/AxiosClient';

export default {
  name: 'ProductCard',
  props: ['item', 'hidePrice'],
  computed: {
    productImage: function () {
      if (this.item.file_path) {
        return `${baseDomain}/${this.item.file_path}`;
      }
      return NO_IMAGE;
    },
    productPrice: function () {
      return formatRupiah(this.item.price);
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click', this.item);
    },
  }
}
</script>

<template>
  <div class="product-card list-item" @click="onClick">
    <span class="unimage">
      <img :src="productImage" alt="Product Image" />
    </span>
    <div class="item-info">
      <p class="prd-title">{{item.name || '-'}}</p>
      <p v-if="!hidePrice">{{productPrice}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  cursor: pointer;

  .unimage {
    padding-bottom: 90%;
  }
}
</style>