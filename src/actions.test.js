import {
    NEW_GAME,
    newGame,
    GUESS,
    guess,
    TOGGLE_INFOMODAL,
    toggleInfoModal
} from './actions';

describe('newGame', () => {
    it('Should return the action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('guess', () => {
    it('Should return the action', () => {
        const x = 50;
        const action = guess(x);
        expect(action.type).toEqual(GUESS);
        expect(action.guess).toEqual(x);
    });
});

describe('toggleInfoModal', () => {
    it('Should return the action', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFOMODAL);
    });
});
