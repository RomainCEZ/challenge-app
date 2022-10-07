import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import Challenge from '../models/Challenge';

export interface ChallengeState {
  challenges: Challenge[];
}

const initialState: ChallengeState = {
  challenges: []
};

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    addChallenge: (state, action: PayloadAction<Challenge>) => {
      state.challenges = [...state.challenges, action.payload];
    },
    setChallenges: (state, action: PayloadAction<Challenge[]>) => {
      state.challenges = [...action.payload]
    },
    removeChallenge: (state, action: PayloadAction<string>) => {
      state.challenges = state.challenges.filter(challenge => challenge.id !== action.payload);
    },
    challengeChampion: (state, action: PayloadAction<{ id: string, challenger: string }>) => {
      const challenge = state.challenges.find(challenge => challenge.id === action.payload.id)
      if (challenge) {
        state.challenges = [
          { ...challenge, activeChallenge: true, challenger: action.payload.challenger },
          ...state.challenges.filter(challenge => challenge.id !== action.payload.id)
        ]
      }
    },
    declareWinner: (state, action: PayloadAction<{ id: string, winner: "champion" | "challenger" }>) => {
      const challenge = state.challenges.find(challenge => challenge.id === action.payload.id)
      if (challenge) {
        if (action.payload.winner === 'champion') state.challenges = [
          {
            ...challenge,
            winstreak: challenge.winstreak + 1,
            challenger: "",
            activeChallenge: false
          },
          ...state.challenges.filter(challenge => challenge.id !== action.payload.id)
        ]
        else if (action.payload.winner === 'challenger') state.challenges =
          [
            {
              ...challenge,
              champion: challenge.challenger!,
              winstreak: 1,
              challenger: "",
              activeChallenge: false
            },
            ...state.challenges.filter(challenge => challenge.id !== action.payload.id)
          ]
      }
    },
    editChallenger: (state, action: PayloadAction<Challenge>) => {
      const challenge = state.challenges.find(challenge => challenge.id === action.payload.id)
      if (challenge) {
        state.challenges = [
          action.payload,
          ...state.challenges.filter(challenge => challenge.id !== action.payload.id)
        ]
      }
    }
  }
});

export const { addChallenge, setChallenges, removeChallenge, challengeChampion, declareWinner, editChallenger } = challengeSlice.actions;

export const selectChallenge = (state: RootState) => state.challenge.challenges;

export default challengeSlice.reducer;
