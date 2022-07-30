import { MouseEventHandler } from "react";
import GlassButton from "../buttons/GlassButton";

interface ActiveChallengeProps {
    challenger: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}
function ActiveChallenge({ challenger, handleClick }: ActiveChallengeProps) {
    return (
        <div className="flex flex-col p-3 gap-2">
            <p className="mb-3 text-center text-2xl break-words border-2 border-primary py-6 rounded-lg animate-pulse">
                Challenged by {challenger} !
            </p>
            <p className="text-lg break-words">The winner is :</p>
            <div className="flex gap-3">
                <GlassButton
                    id="champion"
                    className="px-1 btn-sm w-1/2 flex-1"
                    handleClick={handleClick}
                >
                    Champion
                </GlassButton>
                <GlassButton
                    id="challenger"
                    className="px-1 btn-sm w-1/2 flex-1"
                    handleClick={handleClick}
                >
                    Challenger
                </GlassButton>
            </div>
        </div>
    );
}
export default ActiveChallenge;
