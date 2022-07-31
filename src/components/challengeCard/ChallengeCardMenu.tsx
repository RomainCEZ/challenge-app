import { BsThreeDots } from "react-icons/bs";

function ChallengeCardMenu() {
    function deleteChallenge() {
        console.log("delete");
    }
    return (
        <div className="dropdown dropdown-end items-center">
            <label
                tabIndex={0}
                className="btn btn-sm btn-ghost text-primary text-xl"
                aria-label="card menu"
            >
                <BsThreeDots />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content justify-center items-center mt-2 shadow"
            >
                <li>
                    <button
                        className="btn btn-sm btn-outline btn-primary capitalize"
                        onClick={deleteChallenge}
                    >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default ChallengeCardMenu;
