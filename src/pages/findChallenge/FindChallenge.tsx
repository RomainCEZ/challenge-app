import { ChangeEvent, useMemo, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectChallenge } from "../../features/challenge/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import ChallengeCard from "../../components/challengeCard/ChallengeCard";
import SelectOption from "./SelectOption";

function FindChallenge() {
    const [challengeCard, setChallengeCard] = useState<Challenge | null>(null);
    const challenges = useAppSelector(selectChallenge);
    const specialtiesOptions = useMemo(
        () =>
            challenges
                .map((challenge) => challenge.specialty)
                .sort()
                .map((specialty) => (
                    <SelectOption key={specialty}>{specialty}</SelectOption>
                )),
        [challenges]
    );

    function chooseChallengeCard(e: ChangeEvent<HTMLSelectElement>) {
        const card = challenges.find(
            (challenge) => challenge.specialty === e.currentTarget.value
        );
        setChallengeCard(card!);
    }

    return (
        <section className="flex flex-col gap-8 px-3 sm:px-6 w-full max-w-md">
            <label className="flex flex-col items-center w-full gap-6">
                <h2 className="label-text font-bold text-2xl text-primary">
                    Find your challenge !
                </h2>
                <select
                    className="select select-primary select-bordered text-primary w-full"
                    defaultValue="-- Pick your challenge --"
                    onChange={chooseChallengeCard}
                >
                    <option disabled>-- Pick your challenge --</option>
                    {specialtiesOptions}
                </select>
            </label>
            {challengeCard && (
                <ChallengeCard
                    id={challengeCard.id}
                    champion={challengeCard.champion}
                    specialty={challengeCard.specialty}
                    winstreak={challengeCard.winstreak}
                    activeChallenge={challengeCard.activeChallenge}
                    challenger={challengeCard.challenger}
                />
            )}
        </section>
    );
}

export default FindChallenge;
