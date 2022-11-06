import { Route, Routes } from "react-router-dom";
import FindChallenge from "../features/challenge/pages/findChallenge/FindChallenge";
import Leaderboard from "../features/challenge/pages/leaderboard/Leaderboard";
import { NewChallengeProvider } from "../features/challenge/pages/newChallenge/context/NewChallengeContext";
import NewChallenge from "../features/challenge/pages/newChallenge/NewChallenge";
import NavBar from "./NavBar";
import challengeApi from "../features/challenge/repository/challengeApi";

function MainContentWrap() {
  return (
    <main className="flex flex-col items-center justify-center mt-12 gap-12">
      <NavBar />
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route
          path="newchallenge"
          element={
            <NewChallengeProvider api={challengeApi}>
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
