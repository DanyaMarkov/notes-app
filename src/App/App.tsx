import Header from "@components/Header/Header";
import SidebarMenu from "@components/SidebarMenu/SidebarMenu";
import Landing from "@pages/Landing/Landing";
import NotesPage from "@pages/NotesPage/NotesPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Header />
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
