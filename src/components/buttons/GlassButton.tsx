import { MouseEventHandler } from "react";

interface ButtonProps {
    id?: string;
    children?: string;
    className?: string;
    handleClick?: MouseEventHandler;
    disabled?: boolean;
    dataCy?: string;
}

function GlassButton({
    id,
    children,
    className,
    handleClick,
    disabled,
    dataCy,
}: ButtonProps) {
    return (
        <button
            id={id}
            className={`btn btn-ghost glass ring-1 ring-primary border-primary shadow-lg hover:shadow-xl hover:ring-2 transition-all text-primary ${className}`}
            onClick={handleClick}
            disabled={disabled || false}
            data-cy={dataCy}
        >
            {children}
        </button>
    );
}
export default GlassButton;
