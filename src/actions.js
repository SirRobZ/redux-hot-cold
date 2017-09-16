export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const GUESS = 'GUESS';
export const guess = (guess) => ({
  type: GUESS,
  guess
});

export const TOGGLE_INFOMODAL = 'TOGGLE_INFOMODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFOMODAL
});
