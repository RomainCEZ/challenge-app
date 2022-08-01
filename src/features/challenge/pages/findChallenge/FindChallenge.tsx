import { ChangeEvent, useMemo, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectChallenge } from "../../reducer/challengeSlice";
import ChallengeCard from "../../../../components/challengeCard/ChallengeCard";
import SelectOption from "./SelectOption";

function FindChallenge() {
    const [challengeCard, setChallengeCard] = useState<string | null>(null);
    const challenges = useAppSelector(selectChallenge);
    const specialtiesOptions = challenges
        .map((challenge) => challenge.specialty)
        .sort()
        .map((specialty) => (
            <SelectOption key={specialty}>{specialty}</SelectOption>
        ));

    const cardComponent = useMemo(() => {
        const card = challenges.find(
            (challenge) => challenge.specialty === challengeCard!
        );
        if (card)
            return (
                <ChallengeCard
                    id={card.id}
                    champion={card.champion}
                    specialty={card.specialty}
                    winstreak={card.winstreak}
                    activeChallenge={card.activeChallenge}
                    challenger={card.challenger}
                />
            );
    }, [challenges, challengeCard]);

    function chooseChallengeCard(e: ChangeEvent<HTMLSelectElement>): void {
        setChallengeCard(e.currentTarget.value!);
    }

    return (
        <section className="flex flex-col gap-8 px-3 sm:px-6 w-full max-w-md">
            <label className="flex flex-col items-center w-full gap-6">
                <h2 className="label-text font-bold text-2xl text-primary">
                    Find your challenge !
                </h2>
                <select
                    className="select select-primary select-bordered text-primary w-full capitalize"
                    defaultValue="-- Pick your challenge --"
                    onChange={chooseChallengeCard}
                >
                    <option disabled>-- Pick your challenge --</option>
                    {specialtiesOptions}
                </select>
            </label>
            {challengeCard && cardComponent}
        </section>
    );
}

export default FindChallenge;
