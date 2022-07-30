import { MouseEventHandler } from "react";

interface ButtonProps {
    id?: string;
    children?: string;
    className?: string;
    handleClick?: MouseEventHandler;
}

function GlassButton({ id, children, className, handleClick }: ButtonProps) {
    return (
        <button
            id={id}
            className={`btn btn-ghost glass ring-1 ring-primary border-primary shadow-md hover:ring-2 transition-all ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
export default GlassButton;
