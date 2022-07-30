import { useAppDispatch } from "../../app/hooks";
import GlassButton from "../buttons/GlassButton";
import {
    challengeChampion,
    declareWinner,
} from "../../features/challenge/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import ActiveChallenge from "./ActiveChallenge";
import { memo, MouseEvent } from "react";

const MemoChallengeCard = memo(ChallengeCard);

function ChallengeCard(props: Challenge) {
    const dispatch = useAppDispatch();

    function issueChallenge() {
        dispatch(challengeChampion({ id: props.id!, challenger: "Vador" }));
    }

    function handleWinner(e: MouseEvent<HTMLButtonElement>) {
        dispatch(
            declareWinner({
                id: props.id!,
                winner: e.currentTarget.id as "champion" | "challenger",
            })
        );
    }

    return (
        <article className="flex flex-col justify-between flex-grow border border-primary rounded-xl h-full w-full px-3 py-2 font-bold">
            <div className=" divide-y divide-primary">
                <h2 className="text-xl p-1 py-2 capitalize break-words">
                    {props.specialty}
                </h2>
                <div className="p-3 text-lg">
                    <p className="break-words">Champion : {props.champion} </p>
                    <p>Challenges won : {props.winstreak}</p>
                </div>
            </div>
            {props.challenger ? (
                <ActiveChallenge
                    handleClick={handleWinner}
                    challenger={props.challenger!}
                />
            ) : (
                <GlassButton
                    className="m-3 btn-sm"
                    handleClick={issueChallenge}
                >
                    Challenge
                </GlassButton>
            )}
        </article>
    );
}

export default MemoChallengeCard;
