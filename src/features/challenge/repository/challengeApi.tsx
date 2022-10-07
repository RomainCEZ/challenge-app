import axios from "axios";
import Challenge from "../models/Challenge";

class ChallengeApiProvider {
    constructor() {
        axios.defaults.baseURL = "https://quality-ox-10.hasura.app/v1/graphql";
    }

    async getChallenges(): Promise<Challenge[]> {
        const query = {
            query: `query {
                    challenge {
                        id
                        champion
                        specialty
                        winstreak
                        activeChallenge
                        challenger
                    }
                }`,
            variables: {},
        };
        const response = await axios.post("", query);
        return response.data.data.challenge as Challenge[];
    }

    async addChallenge(challenge: Challenge): Promise<void> {
        const query = {
            query: `mutation {
                insert_challenge_one(
                    object: {
                        id: "${challenge.id}"
                        champion: "${challenge.champion}"
                        specialty: "${challenge.specialty}"
                        winstreak: ${challenge.winstreak}
                        activeChallenge: ${challenge.activeChallenge}
                        challenger: "${challenge.challenger}"
                    }) {
                        id
                    }
                }`,
        };
        await axios.post("", query);
    }

    async editChallenge(id: string, updatedChallenge: Partial<Challenge>) {
        const query = {
            query: `mutation {
                update_challenge_by_pk (
                    pk_columns: {id: "${id}"}
                    _set: {
                        champion: "${updatedChallenge.champion}"
                        challenger: "${updatedChallenge.challenger}"
                        winstreak: "${updatedChallenge.winstreak}"
                        activeChallenge: ${updatedChallenge.activeChallenge}
                    }
                ) {
                    id
                }
            }`,
        };
        await axios.post("", query);
    }

    async deleteChallenge(id: string): Promise<void> {
        const query = {
            query: `mutation {
                delete_challenge_by_pk(id: "${id}") {
                        id
                    }
                }`,
            variables: {},
        };
        await axios.post("", query);
    }
}

export default new ChallengeApiProvider();
