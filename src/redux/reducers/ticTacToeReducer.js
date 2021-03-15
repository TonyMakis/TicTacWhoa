import {UPDATE_TIC_TAC_TOE, RESET_TIC_TAC_TOE} from '../constants/actions';

const initialState = {
  history: [{squares: Array(9).fill(null)}],
  stepNumber: 0,
  xIsNext: true,
};

const ticTacToeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIC_TAC_TOE:
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext,
      };
    case RESET_TIC_TAC_TOE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default ticTacToeReducer;
