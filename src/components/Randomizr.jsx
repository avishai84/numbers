const Randomizr = (min, max) => Number.parseFloat(Math.random() * (max - min) + min).toFixed(0);

export default Randomizr;