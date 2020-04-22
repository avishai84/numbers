const CheckArray = (item, array) => {
      const index = [...array].indexOf(Number.parseInt(item));
      return(index > -1 ? true : false);
};
export default CheckArray;