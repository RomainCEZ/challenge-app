import {
    ChangeEvent,
    createContext,
    FormEvent,
    ReactNode,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    addChallenge,
    selectChallenge,
} from "../../../features/challenge/challengeSlice";
import Challenge from "../../../features/challenge/models/Challenge";
import INewChallengeContext from "../interface/INewChallengeContext";
import NewChallengeForm from "../interface/NewChallengeForm";

const initialState: NewChallengeForm = {
    name: "",
    specialty: "",
};

export const NewChallengeContext = createContext<INewChallengeContext>({
    form: initialState,
    newChallenge: () => {},
    changeInput: () => {},
});

export const NewChallengeProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<NewChallengeForm>(initialState);
    const challenges = useAppSelector(selectChallenge);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function changeInput(e: ChangeEvent<HTMLInputElement>): void {
        setForm({
            ...form,
            [e.currentTarget.name.toLowerCase()]: e.currentTarget.value,
        });
    }

    function newChallenge(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const specialtyAlreadyExists = challenges.find(
            (challenge) => challenge.specialty === form.specialty
        );
        if (!specialtyAlreadyExists) {
            const payload = new Challenge({
                champion: form.name,
                specialty: form.specialty,
            });
            dispatch(addChallenge(payload));
            navigate("/");
        }
    }
    return (
        <NewChallengeContext.Provider
            value={{ form, newChallenge, changeInput }}
        >
            {children}
        </NewChallengeContext.Provider>
    );
};
