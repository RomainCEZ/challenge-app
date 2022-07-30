import challengeReducer, {
  ChallengeState,
  addChallenge,
  removeChallenge,
  challengeChampion,
  declareWinner
} from './challengeSlice';

describe('challenge reducer', () => {
  const emptyInitialState: ChallengeState = {
    challenges: []
  };
  const oneChallengeInitialState = {
    challenges: [{
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
      activeChallenge: false,
      challenger: ""
    }]
  }
  const activeChallengeInitialState = {
    challenges: [{
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
      activeChallenge: true,
      challenger: "Vador"
    }]
  }

  it('should handle initial state', () => {
    expect(challengeReducer(undefined, { type: 'unknown' })).toEqual({ challenges: [] });
  });

  //addChallenge
  it('should add the challenge', () => {
    const actual = challengeReducer(emptyInitialState, addChallenge({
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
      activeChallenge: false,
      challenger: ""
    }));
    expect(actual.challenges).toEqual([{
      id: "1",
      champion: "Romain",
      specialty: "Beat Saber",
      winstreak: 999,
      activeChallenge: false,
      challenger: ""
    }]);
  });

  //removeChallenge
  it('should remove the challenge', () => {
    const actual = challengeReducer(oneChallengeInitialState, removeChallenge("1"));
    expect(actual.challenges).toEqual([]);
  });

  //challengeChampion
  it("should set activeChallenge to true", () => {
    const actual = challengeReducer(oneChallengeInitialState, challengeChampion({ id: "1", challenger: "Vador" }));
    expect(actual.challenges[0].activeChallenge).toEqual(true)
  })
  it("should set challenge to Vador", () => {
    const actual = challengeReducer(oneChallengeInitialState, challengeChampion({ id: "1", challenger: "Vador" }));
    expect(actual.challenges[0].challenger).toEqual("Vador")
  })

  //declareWinner
  it("should increament winstreak", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "champion" }));
    expect(actual.challenges[0].winstreak).toEqual(1000)
  })
  it("should clear challenger", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "champion" }));
    expect(actual.challenges[0].challenger).toEqual("")
  })
  it("should set activeChallenge to false", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "champion" }));
    expect(actual.challenges[0].activeChallenge).toEqual(false)
  })

  it("should set winstreak to 1", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "challenger" }));
    expect(actual.challenges[0].winstreak).toEqual(1)
  })
  // eslint-disable-next-line jest/no-identical-title
  it("should clear challenger", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "challenger" }));
    expect(actual.challenges[0].challenger).toEqual("")
  })
  it("should set champion to Vador", () => {
    const actual = challengeReducer(activeChallengeInitialState, declareWinner({ id: "1", winner: "challenger" }));
    expect(actual.challenges[0].champion).toEqual("Vador")
  })

});
