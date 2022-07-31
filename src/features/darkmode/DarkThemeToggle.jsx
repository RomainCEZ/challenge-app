import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function DarkThemeToggle() {
    const [darkModeActive, setDarkModeActive] = useState(false);
    useEffect(() => {
        themeChange(false);
        setDarkModeActive(localStorage.getItem("theme") === "darkTheme");
    }, []);

    return (
        <div className="absolute right-0 flex items-center">
            <div className="m-5" data-toggle-theme="lightTheme,darkTheme">
                <label
                    className="flex label cursor-pointer"
                    aria-label="toggle darkmode"
                >
                    <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        defaultChecked={darkModeActive}
                    />
                </label>
            </div>
        </div>
    );
}

export default DarkThemeToggle;
