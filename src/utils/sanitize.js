const sanitize = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];

    if (value || value === 0 || value === false) {
      acc[key] = value;
    }

    return acc;
  }, {});
};

export default sanitize;
