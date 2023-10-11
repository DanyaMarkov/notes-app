import Header from "@components/Header/Header";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu";
import Landing from "@pages/Landing/Landing";
import NotesPage from "@pages/NotesPage/NotesPage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
    const [theme, setTheme] = useState<"day" | "night">("day");

    document.body.style.backgroundColor = theme === "day" ? "#f8f4f4" : "#22272e";
    document.body.style.color = theme === "day" ? "#22272e" : "#f8f4f4";

    const links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = theme === "day" ? "#000" : "#f8f4f4"; // Здесь можно задать нужный цвет
    }

    return (
        <div className="app">
            <Header theme={theme} setTheme={setTheme} />
            <SidebarMenu />
            <main>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/:noteId" element={<NotesPage />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
