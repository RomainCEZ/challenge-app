import { Route, Routes } from "react-router-dom";
import Leaderboard from "../pages/leaderboard/Leaderboard";
import NewChallenge from "../pages/newChallenge/NewChallenge";

function MainContentWrap() {
    return (
        <main className="flex flex-col items-center justify-center mt-12 gap-12">
            <div className="btn-group">
                <button className="btn btn-primary btn-outline border-primary btn-active">
                    Leaderboard
                </button>
                <button className="btn btn-primary btn-outline border-primary">
                    New
                </button>
                <button className="btn btn-primary btn-outline border-primary">
                    Find
                </button>
            </div>
            <Routes>
                <Route path="/" element={<Leaderboard />} />
                <Route path="newchallenge" element={<NewChallenge />} />
            </Routes>
        </main>
    );
}

export default MainContentWrap;
