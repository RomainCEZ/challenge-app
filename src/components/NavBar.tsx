import NavButton from "./buttons/NavButton";

function NavBar() {
    const buttonParams = [
        {
            route: "/",
            children: "Leaderboard",
        },
        {
            route: "/newchallenge",
            children: "new",
        },
        {
            route: "/findchallenge",
            children: "find",
        },
    ];

    const navButtons = buttonParams.map((button) => (
        <NavButton key={button.route} route={button.route}>
            {button.children}
        </NavButton>
    ));
    return (
        <nav className="btn-group sm:rounded-lg shadow-lg w-full sm:max-w-2xl mx-3 sm:mx-6">
            {navButtons}
        </nav>
    );
}
export default NavBar;
