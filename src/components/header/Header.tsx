import { Link } from "react-router-dom";
import DarkModeToggle from "../../features/darkmode/DarkThemeToggle";
import logo from "../../assets/lightsaber.png";

function Header() {
  return (
    <header className="flex items-center justify-center p-5 sm:px-5 shadow-xl">
      <Link to="/" className="flex flex-col items-center sm:flex-row gap-3">
        <img className="h-16 w-16" src={logo} alt="logo" />
        <h1 className="text-primary hidden sm:flex text-2xl sm:text-4xl">
          I Challenge You !
        </h1>
      </Link>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
