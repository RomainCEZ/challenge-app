import { useEffect } from "react";
import { themeChange } from "theme-change";

function DarkThemeToggle() {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="absolute right-0 flex items-center">
            <div className="m-5" data-toggle-theme="darkTheme">
                <label
                    className="flex label cursor-pointer"
                    aria-label="toggle darkmode"
                >
                    <input type="checkbox" className="toggle toggle-primary" />
                </label>
            </div>
        </div>
    );
}

export default DarkThemeToggle;
