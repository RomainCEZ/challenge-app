import { useContext } from "react";
import GlassButton from "../../components/buttons/GlassButton";
import InputBorderedPrimary from "../../components/inputs/InputBorderedPrimary";
import { NewChallengeContext } from "./context/NewChallengeContext";

function NewChallenge() {
    const { form, newChallenge, changeInput } = useContext(NewChallengeContext);

    return (
        <section className="flex flex-col items-center gap-6 px-3 sm:px-6 w-full max-w-lg">
            <h2 className="label-text font-bold text-2xl text-primary">
                Claim your superiority !
            </h2>
            <form className="form-control w-full" onSubmit={newChallenge}>
                <InputBorderedPrimary
                    value={form.name}
                    name="Name"
                    handleChange={changeInput}
                />
                <InputBorderedPrimary
                    value={form.specialty}
                    name="Specialty"
                    handleChange={changeInput}
                />
                <GlassButton className="mt-3">I'm the best !</GlassButton>
            </form>
        </section>
    );
}

export default NewChallenge;
