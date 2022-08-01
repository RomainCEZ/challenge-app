import {
    ChangeEvent,
    createContext,
    FormEvent,
    ReactNode,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import useChallengeValidation from "../../../../../components/validation/useChallengeValidation";
import { addChallenge, selectChallenge } from "../../../challengeSlice";
import Challenge from "../../../models/Challenge";
import INewChallengeContext from "../interface/INewChallengeContext";
import NewChallengeForm from "../interface/NewChallengeForm";

const initialState: NewChallengeForm = {
    champion: "",
    specialty: "",
};

export const NewChallengeContext = createContext<INewChallengeContext>({
    form: initialState,
    errors: initialState,
    invalidInputLength: false,
    newChallenge: () => {},
    changeInput: () => {},
});

export const NewChallengeProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState<NewChallengeForm>(initialState);
    const { errors, testInput, resetInput } = useChallengeValidation();
    const challenges = useAppSelector(selectChallenge);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function changeInput(e: ChangeEvent<HTMLInputElement>): void {
        const inputName = e.currentTarget.name.toLowerCase();
        resetInput(e.currentTarget.name.toLowerCase());
        setForm({
            ...form,
            [inputName]: e.currentTarget.value.toLowerCase(),
        });
    }
    const invalidInputLength =
        form.champion.length < 3 || form.specialty.length < 3;

    function newChallenge(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const specialtyList = challenges.map((challenge) =>
            challenge.specialty.toLowerCase()
        );
        console.log(specialtyList);
        if (!testInput(form, specialtyList)) {
            return;
        }
        const payload = new Challenge(form);
        dispatch(addChallenge(payload));
        navigate("/");
    }

    return (
        <NewChallengeContext.Provider
            value={{
                form,
                errors,
                invalidInputLength,
                newChallenge,
                changeInput,
            }}
        >
            {children}
        </NewChallengeContext.Provider>
    );
};
