import { useAppDispatch } from "../../app/hooks";
import GlassButton from "../buttons/GlassButton";
import {
    challengeChampion,
    declareWinner,
} from "../../features/challenge/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import ActiveChallenge from "./ActiveChallenge";
import { ChangeEvent, memo, MouseEvent, useState } from "react";
import InputBorderedPrimary from "../inputs/InputBorderedPrimary";
import ChallengeCardMenu from "./ChallengeCardMenu";

const MemoChallengeCard = memo(ChallengeCard);

function ChallengeCard(props: Challenge) {
    const dispatch = useAppDispatch();
    const [challenger, setChallenger] = useState("");

    function issueChallenge(e: MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(challengeChampion({ id: props.id!, challenger }));
        setChallenger("");
    }

    function changeChallenger(e: ChangeEvent<HTMLInputElement>) {
        setChallenger(e.currentTarget.value);
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
                <div className="flex justify-between items-center">
                    <h2 className="flex justify-between text-xl p-1 py-2 capitalize break-words text-primary">
                        {props.specialty}
                    </h2>
                    <ChallengeCardMenu />
                </div>
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
                <form
                    className="flex flex-col justify-end m-3"
                    onSubmit={issueChallenge}
                >
                    <InputBorderedPrimary
                        value={challenger}
                        name={"Challenger"}
                        handleChange={changeChallenger}
                    />
                    <GlassButton className="btn-sm">Challenge</GlassButton>
                </form>
            )}
        </article>
    );
}

export default MemoChallengeCard;
