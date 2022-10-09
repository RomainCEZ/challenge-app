import { MouseEventHandler } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useAppDispatch } from "../../app/hooks";
import { removeChallenge } from "../../features/challenge/reducer/challengeSlice";
import challengeApi from "../../features/challenge/repository/challengeApi";
import ConfirmModal from "../modals/ConfirmModal";

interface MenuProps {
    id: string;
    challenge: string;
    toggleEdit: MouseEventHandler<HTMLButtonElement>;
}

function ChallengeCardMenu({ id, challenge, toggleEdit }: MenuProps) {
    const dispatch = useAppDispatch();

    function deleteChallenge(): void {
        dispatch(removeChallenge(id));
        challengeApi.deleteChallenge(id);
    }

    return (
        <div
            className="dropdown dropdown-end items-center"
            data-cy={`card-menu-${challenge}`}
        >
            <label
                tabIndex={0}
                className="btn btn-sm btn-ghost text-primary text-xl"
                aria-label="card menu"
            >
                <BsThreeDots />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content justify-center items-center shadow-lg bg-base-100 rounded-lg"
            >
                <li
                    className="flex btn btn-sm btn-outline rounded-b-none border-none btn-primary w-full"
                    data-cy={`${challenge}-edit-button`}
                >
                    <button className="capitalize w-full" onClick={toggleEdit}>
                        Edit
                    </button>
                </li>
                <li
                    className="flex btn modal-button btn-sm btn-outline rounded-t-none border-none btn-primary w-full"
                    data-cy={`${challenge}-delete-button`}
                >
                    <label
                        htmlFor={`${id}confirmModal`}
                        className="cursor-pointer capitalize w-full"
                    >
                        Delete
                    </label>
                </li>
            </ul>
            <ConfirmModal
                id={`${id}confirmModal`}
                headingText={`Do you really want to delete the ${challenge} challenge ?`}
                buttonText="Delete"
                handleClick={deleteChallenge}
                dataCy={`${challenge}-confirm-delete`}
            />
        </div>
    );
}
export default ChallengeCardMenu;
