import { MouseEvent, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
    const [activeTab, setActiveTab] = useState<string>("leaderboard-button");
    const navigate = useNavigate();
    const location = useLocation();

    interface ButtonIdToRouteName {
        "leaderboard-button": string;
        "newchallenge-button": string;
        "findchallenge-button": string;
    }

    const buttonIdToRouteName = {
        "leaderboard-button": "",
        "newchallenge-button": "newchallenge",
        "findchallenge-button": "findchallenge",
    };

    useLayoutEffect(() => {
        const location = window.location.href.split("/").at(-1);
        setActiveTab(location!);
    }, [location]);

    function changeTab(e: MouseEvent<HTMLButtonElement>) {
        const buttonId: keyof ButtonIdToRouteName = e.currentTarget
            .id as keyof ButtonIdToRouteName;
        setActiveTab(buttonIdToRouteName[buttonId]);
        navigate(buttonIdToRouteName[buttonId]);
    }
    return (
        <nav className="btn-group shadow-primary rounded-lg">
            <button
                id="leaderboard-button"
                className={`btn btn-primary btn-outline border-primary${
                    activeTab === "" ? " btn-active" : ""
                }`}
                onClick={changeTab}
            >
                Leaderboard
            </button>
            <button
                id="newchallenge-button"
                className={`btn btn-primary btn-outline border-primary${
                    activeTab === "newchallenge" ? " btn-active" : ""
                }`}
                onClick={changeTab}
            >
                New
            </button>
            <button
                id="findchallenge-button"
                className={`btn btn-primary btn-outline border-primary${
                    activeTab === "findchallenge" ? " btn-active" : ""
                }`}
                onClick={changeTab}
            >
                Find
            </button>
        </nav>
    );
}
export default NavBar;
