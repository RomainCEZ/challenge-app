import { useAppSelector } from "../../../../app/hooks";
import { selectChallenge } from "../../challengeSlice";
import Challenge from "../../models/Challenge";
import ChallengeCard from "../../../../components/challengeCard/ChallengeCard";

function Leaderboard() {
    const challenges: Challenge[] = [...useAppSelector(selectChallenge)].sort(
        (a: Challenge, b: Challenge) => b.winstreak! - a.winstreak!
    );
    const challengeCards: JSX.Element[] = challenges.map(
        (challenge: Challenge) => (
            <ChallengeCard
                key={challenge.id}
                id={challenge.id}
                champion={challenge.champion}
                specialty={challenge.specialty}
                winstreak={challenge.winstreak}
                activeChallenge={challenge.activeChallenge}
                challenger={challenge.challenger}
            />
        )
    );

    return (
        <section className="flex flex-col items-center justify-center w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl p-3 sm:px-6 gap-3 w-full">
                {challengeCards.length > 0 ? (
                    challengeCards
                ) : (
                    <p>No champion yet !</p>
                )}
            </div>
        </section>
    );
}

export default Leaderboard;
