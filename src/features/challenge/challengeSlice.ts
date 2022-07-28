import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Challenge from './models/Challenge';
import ChallengeProvider from './challengeProvider';

const challengeProvider = new ChallengeProvider()

export interface ChallengeState {
  challenges: Challenge[];
}

const initialState: ChallengeState = {
  challenges: challengeProvider.getChallenges()
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    addChallenge: (state, action: PayloadAction<Challenge>) => {
      state.challenges = [...state.challenges, action.payload];
      challengeProvider.saveChallenges(state.challenges)

    },
    removeChallenge: (state, action: PayloadAction<string>) => {
      state.challenges = state.challenges.filter(challenge => challenge.id !== action.payload);
      challengeProvider.saveChallenges(state.challenges)
    },
  },
});

export const { addChallenge, removeChallenge } = challengeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectChallenge = (state: RootState) => state.challenge.challenges;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//     (dispatch, getState) => {
//       const currentValue = selectCount(getState());
//       if (currentValue % 2 === 1) {
//         dispatch(incrementByAmount(amount));
//       }
//     };

export default challengeSlice.reducer;
