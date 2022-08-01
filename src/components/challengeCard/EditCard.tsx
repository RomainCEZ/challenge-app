import {
    ChangeEvent,
    FormEvent,
    MouseEventHandler,
    useEffect,
    useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    editChallenger,
    selectChallenge,
} from "../../features/challenge/reducer/challengeSlice";
import Challenge from "../../features/challenge/models/Challenge";
import GlassButton from "../buttons/GlassButton";
import InputBorderedPrimary from "../inputs/InputBorderedPrimary";
import useChallengeValidation from "../validation/useChallengeValidation";

interface EditCardProps {
    id: string;
    toggleEdit: MouseEventHandler<HTMLButtonElement> | any; //need to find a type usable in submitEdit()
}

function EditCard({ id, toggleEdit }: EditCardProps) {
    const challenges = useAppSelector(selectChallenge);
    const dispatch = useAppDispatch();
    const preEditChallenge = challenges.find(
        (challenge) => challenge.id === id
    );
    const [challenge, setChallenge] = useState<Challenge>({
        ...preEditChallenge!,
    });
    const { errors, testInput, resetInput } = useChallengeValidation();

    function changeTextInput(e: ChangeEvent<HTMLInputElement>): void {
        resetInput(e.target.name.toLowerCase());
        setChallenge((challenge) => ({
            ...challenge,
            champion: e.target.value,
        }));
    }

    function changeWinstreak(e: ChangeEvent<HTMLInputElement>): void {
        setChallenge((challenge) => ({
            ...challenge,
            winstreak: Math.floor(+e.target.value),
        }));
    }

    function changeActiveChallenge(): void {
        setChallenge((challenge) => ({
            ...challenge,
            activeChallenge: !challenge.activeChallenge,
        }));
    }

    useEffect(() => {
        setChallenge(preEditChallenge!);
    }, [preEditChallenge]);

    function onSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (!testInput(challenge)) return;
        if (challenge.activeChallenge) dispatch(editChallenger(challenge));
        else
            dispatch(
                editChallenger({
                    ...challenge,
                    challenger: "",
                })
            );
        toggleEdit();
    }

    return (
        <div className="relative flex flex-col divide-y divide-primary h-full">
            <div className="flex items-center">
                <h2 className="text-2xl p-1 py-2 capitalize break-words text-primary">
                    {challenge.specialty}
                </h2>
            </div>
            <form
                className="flex flex-col items-center pt-4 px-3 gap-1 h-full"
                onSubmit={onSubmit}
            >
                <InputBorderedPrimary
                    className="input break-words text-3xl text-center w-full"
                    value={challenge.champion}
                    placeholder={"Champion name *"}
                    name={"champion"}
                    handleChange={changeTextInput}
                    error={errors.champion}
                />
                <InputBorderedPrimary
                    className="input break-words text-2xl text-center w-full"
                    type="number"
                    value={challenge.winstreak.toString()}
                    name={"winstreak"}
                    handleChange={changeWinstreak}
                />
                <label className="flex label cursor-pointer gap-2">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        onChange={changeActiveChallenge}
                        checked={challenge.activeChallenge}
                    />{" "}
                    <span className="label-text">Active challenge</span>
                </label>
                <div className="flex flex-col justify-between w-full">
                    {challenge.activeChallenge && (
                        <InputBorderedPrimary
                            className="w-full"
                            value={challenge.challenger}
                            placeholder={"Challenger name *"}
                            name={"challenger"}
                            handleChange={changeTextInput}
                            error={errors.challenger}
                        />
                    )}
                </div>
                <div className=" flex gap-3 mb-3 w-full items-end h-full">
                    <GlassButton
                        className="px-1 btn-sm w-1/2 flex-1"
                        disabled={
                            challenge.champion.length < 3 ||
                            (challenge.activeChallenge &&
                                challenge.challenger!.length < 3)
                        }
                    >
                        Edit
                    </GlassButton>
                    <GlassButton
                        className="px-1 btn-sm w-1/2 flex-1"
                        handleClick={toggleEdit}
                    >
                        Cancel
                    </GlassButton>
                </div>
            </form>
        </div>
    );
}
export default EditCard;
