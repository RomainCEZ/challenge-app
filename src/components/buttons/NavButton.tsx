import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
    children?: string;
    route: string;
    className?: string;
}

function NavButton({ children, route, className }: ButtonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function changeRoute(): void {
        navigate(route);
    }

    const routeIsActive = location.pathname === route;

    return (
        <button
            className={`flex-1 btn btn-primary btn-outline border-primary rounded-none border-0 sm:border sm:rounded-lg${
                routeIsActive ? " btn-active" : ""
            } ${className}`}
            onClick={changeRoute}
        >
            {children}
        </button>
    );
}
export default NavButton;
