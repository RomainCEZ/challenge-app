import { ChangeEventHandler, FormEventHandler } from "react";
import NewChallengeForm from "./NewChallengeForm";

export default interface INewChallengeContext {
    form: NewChallengeForm;
    newChallenge: FormEventHandler<HTMLFormElement>;
    changeInput: ChangeEventHandler<HTMLInputElement>;
}
