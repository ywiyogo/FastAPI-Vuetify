export const formatRupiah = (value = 0) => {
  if (value === null || value === undefined) {
    return 'Rp. 0';
  }

  const currencyRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  const price = value.toString().replace(currencyRegex, '$1.');

  return `Rp. ${price}`;
};
