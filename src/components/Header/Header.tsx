import Switch from "@components/Switch/Switch";
import { useState } from "react";
import style from "./Header.module.scss";

const Header = () => {
    // const userName = localStorage.getItem("userName") || "User Test";
    const [currentMode, setCurrentMode] = useState<"day" | "night">("day");

    return (
        <header className={style.header}>
            <div className={style.title}>Notes App</div>
            <div className={style.theme}>
                <Switch currentMode={currentMode} setCurrentMode={setCurrentMode} />
            </div>
        </header>
    );
};

export default Header;
