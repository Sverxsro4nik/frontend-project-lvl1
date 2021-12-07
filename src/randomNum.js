const randomNum = (min, max) => {
  const number = Math.round(Math.random() * (max - min + 1) + min);
  return number;
};

export default randomNum;
