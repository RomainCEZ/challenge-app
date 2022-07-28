import { nanoid } from "nanoid";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
    addChallenge,
    selectChallenge,
} from "../../features/challenge/challengeSlice";

interface NewChallengeForm {
    name: string;
    specialty: string;
}

const initialState: NewChallengeForm = {
    name: "",
    specialty: "",
};

function NewChallenge() {
    const [form, setForm] = useState<NewChallengeForm>(initialState);
    const challenges = useAppSelector(selectChallenge);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function changeName(e: ChangeEvent<HTMLInputElement>): void {
        setForm({ ...form, name: e.target.value });
    }

    function changeSpecialty(e: ChangeEvent<HTMLInputElement>): void {
        setForm({ ...form, specialty: e.target.value });
    }

    function newChallenge(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const specialtyAlreadyExists = challenges.find(
            (challenge) => challenge.specialty === form.specialty
        );
        if (!specialtyAlreadyExists) {
            const payload = {
                id: nanoid(),
                champion: form.name,
                specialty: form.specialty,
                winstreak: 0,
            };
            dispatch(addChallenge(payload));
            navigate("/");
        }
    }

    return (
        <>
            <Link to="/" className="btn btn-primary btn-outline border-primary">
                Back
            </Link>
            <section className="p-3">
                <form className="form-control gap-4" onSubmit={newChallenge}>
                    <input
                        className="input input-bordered border-primary"
                        placeholder="Name"
                        aria-label="name"
                        onChange={changeName}
                        value={form.name}
                        required
                    />
                    <input
                        className="input input-bordered border-primary"
                        placeholder="Specialty"
                        aria-label="specialty"
                        onChange={changeSpecialty}
                        value={form.specialty}
                        required
                    />
                    <button className="btn btn-primary btn-outline border-primary">
                        I'm the best !
                    </button>
                </form>
            </section>
        </>
    );
}

export default NewChallenge;
