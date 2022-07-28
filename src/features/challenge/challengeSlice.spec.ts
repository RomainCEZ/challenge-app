import challengeReducer, {
  ChallengeState,
  addChallenge,
  removeChallenge,
} from './challengeSlice';

describe('counter reducer', () => {
  const emptyInitialState: ChallengeState = {
    challenges: []
  };
  const oneChallengeInitialState = {
    challenges: [{
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
    }]
  }

  it('should handle initial state', () => {
    expect(challengeReducer(undefined, { type: 'unknown' })).toEqual({ challenges: [] });
  });

  it('should handle addChallenge', () => {
    const actual = challengeReducer(emptyInitialState, addChallenge({
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
    }));
    expect(actual.challenges).toEqual([{
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
    }]);
  });

  it('should handle removeChallenge', () => {
    const actual = challengeReducer(oneChallengeInitialState, removeChallenge("1"));
    expect(actual.challenges).toEqual([]);
  });

});
