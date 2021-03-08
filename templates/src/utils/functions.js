export const getArrayCombination = (inputArray = []) => {
  if (inputArray.length === 0) {
    return [];
  }

  if (inputArray.length === 1) {
    return inputArray[0].options.map(opt => {
      return {
        price: '',
        quantity: '',
        sku: '',
        image: '',
        [`variant_${inputArray[0].name}_name`]: opt.name,
        [`variant_${inputArray[0].name}_id`]: opt.id
      }
    });
  }

  const result = inputArray.reduce((a, b) => {
    return a.options.reduce((r, v) => {
      return r.concat(b.options.map(w => {
        return [].concat(
          {
            [`variant_${a.name}_name`]: v.name,
            [`variant_${a.name}_id`]: v.id
          },
          {
            [`variant_${b.name}_name`]: w.name,
            [`variant_${b.name}_id`]: w.id
          });
      }));
    }, []);
  });

  let inObject = result.map(item => {
    let obj = {
      price: '',
			quantity: '',
			sku: '',
			image: ''
    };

    item.forEach(opt => {
      obj = { ...obj, ...opt }
    });

    return obj;
  });


  return inObject;
};
