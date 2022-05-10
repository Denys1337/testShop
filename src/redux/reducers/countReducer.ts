import { CountReducer } from "../../types/types";

const initialState: CountReducer = {
  count: 0,

}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const countReducer = (state = initialState, action: any): CountReducer => {
  switch (action.type) {

    case "INCREMENT":
      return {...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {...state,
        count: state.count - 1, 
      };
    default:
      return state
  }
}
