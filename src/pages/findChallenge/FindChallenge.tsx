import { useAppSelector } from "../../app/hooks";
import { selectChallenge } from "../../features/challenge/challengeSlice";

function FindChallenge() {
    const challenges = useAppSelector(selectChallenge);
    const specialtiesOptions = challenges
        .map((challenge) => challenge.specialty)
        .sort()
        .map((specialty) => <option>{specialty}</option>);

    return (
        <section>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-bold text-xl text-primary">
                        Find your challenge !
                    </span>
                </label>
                <select
                    className="select select-primary select-bordered text-primary"
                    defaultValue="Pick your challenge"
                >
                    <option disabled>Pick your challenge</option>
                    {specialtiesOptions}
                </select>
            </div>
        </section>
    );
}

export default FindChallenge;
