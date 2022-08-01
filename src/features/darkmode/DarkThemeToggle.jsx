import { useEffect } from "react";
import { themeChange } from "theme-change";
import { BiMoon } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";

function DarkThemeToggle() {
    const darkModeActive = localStorage.getItem("theme") === "darkTheme";
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="absolute right-0 flex items-center">
            <div
                className="m-2 sm:m-5"
                data-toggle-theme="lightTheme,darkTheme"
            >
                <label
                    className="flex label cursor-pointer font-bold text-2xl text-primary"
                    aria-label="toggle darkmode"
                >
                    <span className="">
                        <MdLightMode />
                    </span>
                    <input
                        type="checkbox"
                        className="toggle toggle-primary mx-1"
                        defaultChecked={darkModeActive}
                    />

                    <span className="">
                        <BiMoon />
                    </span>
                </label>
            </div>
        </div>
    );
}

export default DarkThemeToggle;
