import { NEW_GAME, GUESS, TOGGLE_INFOMODAL } from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export const gameReducer = (state = initialState || state, action) => {
  if (action.type === NEW_GAME) {
    state = Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer
    });
    return state;
  }
  else if (action.type === GUESS) {
    const guess = parseInt(action.guess, 10);
    if(isNaN(guess)) {
      state.Object.assign({}, state, {
        feedback: 'Please enter a valid numnber'
      });
      return state;
    }
    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }

    state = Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
    return state;
  }
  else if (action.type === 'TOGGLE_INFOMODAL') {
    state = Object.assign({}, state, {
      showInfoModal: true
    });
    return state;
  }
  return state;
}
