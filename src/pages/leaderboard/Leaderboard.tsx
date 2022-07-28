import { useAppSelector } from "../../app/hooks";
import { selectChallenge } from "../../features/challenge/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import ChampionCard from "./ChampionCard";

function Leaderboard() {
    const challenges: Challenge[] = [...useAppSelector(selectChallenge)].sort(
        (a: Challenge, b: Challenge) => b.winstreak - a.winstreak
    );

    const champions: JSX.Element[] = challenges.map((challenge: Challenge) => (
        <ChampionCard
            key={challenge.id}
            id={challenge.id}
            champion={challenge.champion}
            specialty={challenge.specialty}
            winstreak={challenge.winstreak}
        />
    ));

    return (
        <section className="flex flex-col items-center justify-center p-3 gap-3">
            {champions.length > 0 ? champions : <p>No champion yet !</p>}
        </section>
    );
}

export default Leaderboard;
