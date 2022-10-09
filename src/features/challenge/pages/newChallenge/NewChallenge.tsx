import { useContext } from "react";
import GlassButton from "../../../../components/buttons/GlassButton";
import InputBorderedPrimary from "../../../../components/inputs/InputBorderedPrimary";
import { NewChallengeContext } from "./context/NewChallengeContext";

function NewChallenge() {
    const {
        form,
        errors,
        invalidInputLength,
        newChallenge,
        changeInput,
        pending,
    } = useContext(NewChallengeContext);

    return (
        <section className="flex flex-col items-center gap-6 px-3 sm:px-6 w-full max-w-lg">
            <h2 className="font-bold text-2xl text-primary">
                Claim your superiority !
            </h2>
            <form
                className="form-control w-full"
                onSubmit={newChallenge}
                data-cy="new-challenge-form"
            >
                <InputBorderedPrimary
                    value={form.champion}
                    name={"champion"}
                    placeholder="Name *"
                    handleChange={changeInput}
                    error={errors.champion}
                    disabled={pending}
                />
                <InputBorderedPrimary
                    value={form.specialty}
                    name={"specialty"}
                    placeholder="Specialty *"
                    handleChange={changeInput}
                    error={errors.specialty}
                    disabled={pending}
                />
                <GlassButton
                    className={`mt-3 ${pending ? "loading" : ""}`}
                    disabled={invalidInputLength || pending}
                    dataCy="new-challenge-form-button"
                >
                    I'm the best !
                </GlassButton>
            </form>
        </section>
    );
}

export default NewChallenge;
