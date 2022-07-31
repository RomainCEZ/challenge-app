import { useEffect } from "react";
import { themeChange } from "theme-change";

function DarkThemeToggle() {
    const darkModeActive = localStorage.getItem("theme") === "darkTheme";
    useEffect(() => {
        themeChange(false);
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
