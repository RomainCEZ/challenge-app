import { ChangeEventHandler } from "react";

interface InputProps {
    type?: string;
    value?: string;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    name?: string;
    placeholder?: string;
    className?: string;
    error?: string;
}

function InputBorderedPrimary(props: InputProps) {
    return (
        <div className="flex flex-col relative justify-center gap-2 mb-2 w-full">
            <input
                className={`input input-bordered border-primary shadow-lg w-full ${props.className}`}
                type={props.type || "text"}
                placeholder={props.placeholder}
                aria-label={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
                min={0}
                minLength={3}
                maxLength={20}
                required
            />
            <p className="px-2 font-bold text-error text-center h-6">
                {props.error}
            </p>
        </div>
    );
}
export default InputBorderedPrimary;
