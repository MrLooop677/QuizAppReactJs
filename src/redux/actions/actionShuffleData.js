import {arrOfData} from "../../helpers/Questions"
const shuffleDataType = "shuffleDataType";




const shuffle= (array)=> {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

export const shuffleData = (arrOfData) => {
  return {
    type: shuffleDataType,
    payLoad: shuffle(arrOfData)
  };
};