import { MouseEventHandler } from "react";
import GlassButton from "../buttons/GlassButton";

interface ConfirmModalProps {
    id?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    headingText?: string;
    buttonText?: string;
}

function ConfirmModal(props: ConfirmModalProps) {
    return (
        <>
            <input type="checkbox" id={props.id} className="modal-toggle" />
            <label htmlFor={props.id} className="modal cursor-pointer">
                <label
                    className="flex flex-col p-10 gap-10 justify-center items-center modal-box relative ring-1 ring-primary"
                    htmlFor={props.id}
                >
                    <h3 className="text-xl font-bold text-center">
                        {props.headingText}
                    </h3>
                    <GlassButton
                        className="btn-sm w-full sm:w-2/3"
                        handleClick={props.handleClick}
                    >
                        {props.buttonText}
                    </GlassButton>
                </label>
            </label>
        </>
    );
}
export default ConfirmModal;
