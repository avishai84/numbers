
const CheckArray = (randomNum, arrayFromState) => {
      if([...arrayFromState].length > 0){
            const index = [...arrayFromState].indexOf(Number.parseInt(randomNum));
            return(index > -1 ? true : false);
      }
      return(null);
};
export default CheckArray;