import { ChangeEventHandler, FormEventHandler } from "react";
import Challenge from "../../../models/Challenge";
import NewChallengeForm from "./NewChallengeForm";

export default interface INewChallengeContext {
    form: NewChallengeForm;
    errors: Partial<Challenge>;
    invalidInputLength: boolean;
    newChallenge: FormEventHandler<HTMLFormElement>;
    changeInput: ChangeEventHandler<HTMLInputElement>;
}
