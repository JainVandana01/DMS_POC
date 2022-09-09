const calculateRange = (data: any, rowsPerPage: any) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: any, page: any, rowsPerPage: any) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export { calculateRange, sliceData };
