import { Route, Routes } from "react-router-dom";
import FindChallenge from "../pages/findChallenge/FindChallenge";
import Leaderboard from "../pages/leaderboard/Leaderboard";
import { NewChallengeProvider } from "../pages/newChallenge/context/NewChallengeContext";
import NewChallenge from "../pages/newChallenge/NewChallenge";
import NavBar from "./NavBar";

function MainContentWrap() {
    return (
        <main className="flex flex-col items-center justify-center mt-12 gap-12">
            <NavBar />
            <Routes>
                <Route path="/" element={<Leaderboard />} />
                <Route
                    path="newchallenge"
                    element={
                        <NewChallengeProvider>
                            <NewChallenge />
                        </NewChallengeProvider>
                    }
                />
                <Route path="findchallenge" element={<FindChallenge />} />
            </Routes>
        </main>
    );
}

export default MainContentWrap;
