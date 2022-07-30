import { useContext } from "react";
import GlassButton from "../../components/buttons/GlassButton";
import BorderedPrimaryInput from "../../components/inputs/BorderedPrimaryInput";
import { NewChallengeContext } from "./context/NewChallengeContext";

function NewChallenge() {
    const { form, newChallenge, changeInput } = useContext(NewChallengeContext);

    return (
        <section className="flex flex-col items-center gap-6 px-3 sm:px-6 w-full max-w-lg">
            <h2 className="label-text font-bold text-2xl text-primary">
                Claim your superiority !
            </h2>
            <form className="form-control gap-4 w-full" onSubmit={newChallenge}>
                <BorderedPrimaryInput
                    value={form.name}
                    name="Name"
                    handleChange={changeInput}
                />
                <BorderedPrimaryInput
                    value={form.specialty}
                    name="Specialty"
                    handleChange={changeInput}
                />
                <GlassButton>I'm the best !</GlassButton>
            </form>
        </section>
    );
}

export default NewChallenge;
