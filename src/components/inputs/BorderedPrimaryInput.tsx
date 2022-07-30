import { ChangeEventHandler } from "react";

interface InputProps {
    value: string;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    name: string;
    className?: string;
}

function BorderedPrimaryInput({
    value,
    handleChange,
    name,
    className,
}: InputProps) {
    return (
        <input
            className={`input input-bordered border-primary ${className}`}
            placeholder={name}
            aria-label={name}
            name={name}
            onChange={handleChange}
            value={value}
            required
        />
    );
}
export default BorderedPrimaryInput;
