import {arrOfData} from "../../helpers/Questions"
const shuffleDataType = "shuffleDataType";

export const reducerData = (state = arrOfData, action) => {
    switch (action.type) {
      case shuffleDataType:
        return action.payLoad;
     
      default:
        return state;
    }
  };