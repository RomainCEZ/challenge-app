import Challenge from "../../features/challenge/models/Challenge";

class InMemoryApi {
  challenges: Challenge[];
  constructor() {
    this.challenges = [];
  }
  addChallenge(challenge: Challenge) {
    this.challenges.push(challenge);
  }
}

export default new InMemoryApi();
