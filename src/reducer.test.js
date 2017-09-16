import reducer from './reducer';
import {newGame, guess, toggleInfoModal} from './actions'

describe('reducer', () => {
    it('Should set the initial state', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false);
    });


    describe('newGame', () => {
        it('Should start a new game', () => {
            // simulate game
            let state = {
                guesses: [1, 2, 3, 4],
                feedback: 'You are dumb',
                correctAnswer: -1 // Negative so different to new game
            };
            state = reducer(state, newGame());
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
            expect(state.correctAnswer).toBeLessThanOrEqual(100);
        });
    });

    describe('guess', () => {
        it('Should make a guess', () => {
            // Fix the correct answer so we know what we're aiming for
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 100 // Negative so different to new game
            };

            state = reducer(state, guess(10));
            expect(state.guesses).toEqual([10]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');

            state = reducer(state, guess(70));
            expect(state.guesses).toEqual([10, 70]);
            expect(state.feedback).toEqual('You\'re Cold...');

            state = reducer(state, guess(85));
            expect(state.guesses).toEqual([10, 70, 85]);
            expect(state.feedback).toEqual('You\'re Warm');

            state = reducer(state, guess(99));
            expect(state.guesses).toEqual([10, 70, 85, 99]);
            expect(state.feedback).toEqual('You\'re Hot!');

            state = reducer(state, guess(100));
            expect(state.guesses).toEqual([10, 70, 85, 99, 100]);
            expect(state.feedback).toEqual('You got it!');
        });
    });

    describe('toggleInfoModal', () => {
        it('Should toggle info modal', () => {
            let state = {
                showInfoModal: false
            };
            state = reducer(state, toggleInfoModal());
            expect(state.showInfoModal).toEqual(true);
        });
    });
});
