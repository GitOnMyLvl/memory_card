const getRandomUniqueNumbers = (min, max, count ) => {
  const numbers = [];
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }

  uniqueNumbers.forEach(number => numbers.push(number));
  return numbers
}

export default getRandomUniqueNumbers;