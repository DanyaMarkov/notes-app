import Switch from "@components/Switch/Switch";
import style from "./Header.module.scss";

interface HeaderProps {
    theme: "day" | "night";
    setTheme: React.Dispatch<React.SetStateAction<"day" | "night">>;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
    // const userName = localStorage.getItem("userName") || "User Test";
    // const [currentMode, setCurrentMode] = useState<"day" | "night">("day");

    return (
        <header className={style.header}>
            <div className={style.title}>Notes App</div>
            <div className={style.theme}>
                <Switch currentMode={theme} setCurrentMode={setTheme} />
            </div>
        </header>
    );
};

export default Header;
