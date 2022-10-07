import { useAppDispatch } from "../../app/hooks";
import GlassButton from "../buttons/GlassButton";
import {
    challengeChampion,
    declareWinner,
} from "../../features/challenge/reducer/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import ActiveChallenge from "./ActiveChallenge";
import { ChangeEvent, memo, MouseEvent, useState } from "react";
import InputBorderedPrimary from "../inputs/InputBorderedPrimary";
import ChallengeCardMenu from "./ChallengeCardMenu";
import EditCard from "./EditCard";
import useChallengeValidation from "../validation/useChallengeValidation";
import challengeApi from "../../features/challenge/repository/challengeApi";

const MemoChallengeCard = memo(ChallengeCard);

function ChallengeCard(props: Challenge) {
    const dispatch = useAppDispatch();
    const [challenger, setChallenger] = useState<string>("");
    const [editing, setEditing] = useState<boolean>(false);
    const { errors, testInput, resetInput } = useChallengeValidation();

    function issueChallenge(e: MouseEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (!testInput({ challenger, champion: props.champion })) return;
        dispatch(
            challengeChampion({
                id: props.id!,
                challenger,
            })
        );
        challengeApi.editChallenge(props.id, {
            champion: props.champion,
            specialty: props.specialty,
            winstreak: props.winstreak,
            challenger: challenger,
            activeChallenge: true,
        });
        setChallenger("");
    }

    function changeChallenger(e: ChangeEvent<HTMLInputElement>): void {
        resetInput(e.target.name.toLowerCase());
        setChallenger(e.target.value);
    }

    function handleWinner(e: MouseEvent<HTMLButtonElement>): void {
        dispatch(
            declareWinner({
                id: props.id!,
                winner: e.currentTarget.id as "champion" | "challenger",
            })
        );
        challengeApi.editChallenge(props.id, {
            champion:
                e.currentTarget.id === "champion"
                    ? props.champion
                    : props.challenger,
            specialty: props.specialty,
            winstreak:
                e.currentTarget.id === "champion" ? props.winstreak + 1 : 1,
            challenger: "",
            activeChallenge: false,
        });
    }

    function toggleEdit(): void {
        setEditing((editing) => !editing);
    }

    return (
        <article className="flex flex-col justify-between flex-grow border border-primary shadow-lg rounded-xl h-full w-full px-3 py-2 font-bold">
            {editing ? (
                <EditCard id={props.id} toggleEdit={toggleEdit} />
            ) : (
                <>
                    <div className="divide-y divide-primary">
                        <div className="flex justify-between items-center">
                            <h2 className="flex justify-between text-2xl p-1 py-2 capitalize break-words text-primary">
                                {props.specialty}
                            </h2>
                            <ChallengeCardMenu
                                id={props.id}
                                challenge={props.specialty}
                                toggleEdit={toggleEdit}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center pt-4 px-3 gap-1">
                            <p className="break-words text-3xl">
                                {props.champion}
                            </p>
                            <p className="text-2xl">
                                {props.winstreak}{" "}
                                {props.winstreak > 1 ? "wins" : "win"}
                            </p>
                        </div>
                    </div>
                    {props.challenger ? (
                        <ActiveChallenge
                            handleClick={handleWinner}
                            challenger={props.challenger!}
                        />
                    ) : (
                        <div>
                            <p className="text-lg text-center mt-5">
                                Issue your challenge :
                            </p>
                            <form
                                className="flex flex-col justify-end m-3"
                                onSubmit={issueChallenge}
                            >
                                <InputBorderedPrimary
                                    value={challenger}
                                    name={"Challenger"}
                                    placeholder="Challenger name *"
                                    handleChange={changeChallenger}
                                    error={errors.challenger}
                                />
                                <GlassButton
                                    className="btn-sm"
                                    disabled={challenger.length < 3}
                                >
                                    I Challenge You !
                                </GlassButton>
                            </form>
                        </div>
                    )}
                </>
            )}
        </article>
    );
}

export default MemoChallengeCard;
