import { ChangeEventHandler } from "react";

interface InputProps {
    value: string;
    handleChange?: ChangeEventHandler<HTMLInputElement>;
    name: string;
    className?: string;
}

function InputBorderedPrimary(props: InputProps) {
    return (
        <>
            <div className="flex flex-col relative justify-center">
                <input
                    className={`input input-bordered border-primary w-full ${props.className}`}
                    type="text"
                    placeholder={props.name}
                    aria-label={props.name}
                    name={props.name}
                    onChange={props.handleChange}
                    value={props.value}
                    maxLength={20}
                    required
                />
                <p className="absolute text-sm right-3">
                    {props.value.length}/20
                </p>
            </div>
            <p className="p-2 text-error text-center">error text</p>
        </>
    );
}
export default InputBorderedPrimary;
