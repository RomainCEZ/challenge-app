import Challenge from "./models/Challenge";

class ChallengeProvider {
    saveChallenges(challenges: Challenge[]): void {
        localStorage.setItem("challenges", JSON.stringify(challenges));
    }
    getChallenges(): Challenge[] {
        const challenges: Challenge[] = JSON.parse(
            localStorage.getItem("challenges") || "[]"
        );
        return challenges;
    }
}

export default ChallengeProvider;
