import { useState } from "react";
import Challenge from "../../features/challenge/models/Challenge";

function useChallengeValidation() {
    const [errors, setErrors] = useState<Partial<Challenge>>({
        champion: "",
        challenger: "",
        specialty: "",
    });

    function testInput(
        challenge: Partial<Challenge>,
        specialtyList?: string[]
    ): boolean {
        switch (true) {
            case challenge.challenger &&
                challenge.champion &&
                challenge.champion === challenge.challenger: {
                setErrors({
                    ...errors,
                    challenger: "You can't challenge yourself !",
                });
                return false;
            }
            case challenge.challenger &&
                !/^[0-9-'\s\p{L}\p{M}]+$/gimu.test(challenge.challenger): {
                setErrors({
                    ...errors,
                    challenger: "Invalid name !",
                });
                return false;
            }
            case challenge.champion &&
                !/^[0-9-'\s\p{L}\p{M}]+$/gimu.test(challenge.champion): {
                setErrors({
                    ...errors,
                    champion: "Invalid name !",
                });
                return false;
            }
            case challenge.specialty &&
                !/^[0-9-'%/\s\p{L}\p{M}]+$/gimu.test(challenge.specialty): {
                setErrors({
                    ...errors,
                    specialty: "Invalid specialty !",
                });
                return false;
            }
            case specialtyList &&
                challenge.specialty &&
                specialtyList.includes(challenge.specialty): {
                setErrors({
                    ...errors,
                    specialty: "This challenge already exists !",
                });
                return false;
            }
            default:
                return true;
        }
    }

    function resetInput(inputName: string): void {
        setErrors((errors) => ({ ...errors, [inputName]: "" }));
    }

    return { errors, testInput, resetInput };
}
export default useChallengeValidation;
