const CheckArray = (randomNum, arrayFromState) => {
      if([...arrayFromState].length > 0){
            const index = [...arrayFromState].indexOf(Number.parseInt(randomNum));
            return(index > -1 ? true : false);
      }
      console.log('less then 1 === 0');
      return(null);
};
export default CheckArray;