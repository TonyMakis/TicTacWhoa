import {UPDATE_TIC_TAC_TOE, RESET_TIC_TAC_TOE} from '../constants/actions';

export function updateTicTacToe(ticTacToe) {
  return {
    type: UPDATE_TIC_TAC_TOE,
    payload: ticTacToe,
  };
}

export function resetTicTacToe() {
  return {
    type: RESET_TIC_TAC_TOE,
  };
}
