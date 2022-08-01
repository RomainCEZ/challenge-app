import { MouseEventHandler } from "react";

interface ButtonProps {
    id?: string;
    children?: string;
    className?: string;
    handleClick?: MouseEventHandler;
    disabled?: boolean;
}

function GlassButton({
    id,
    children,
    className,
    handleClick,
    disabled,
}: ButtonProps) {
    return (
        <button
            id={id}
            className={`btn btn-ghost glass ring-1 ring-primary border-primary shadow-lg hover:shadow-xl hover:ring-2 transition-all text-primary ${className}`}
            onClick={handleClick}
            disabled={disabled || false}
        >
            {children}
        </button>
    );
}
export default GlassButton;
