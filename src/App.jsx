import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Users from "./Users";
import Posts from "./Posts";
import Tasks from "./Tasks";

function App() {
    return (
        <BrowserRouter>
            <div dir="rtl">
                <Navbar />
                <Sidebar />

                <main className="pt-16 mr-64 p-6 transition-all duration-300">
                    <Routes>
                        <Route path="/users" element={<Users />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/" element={<Navigate to="/users"/>}/>
                        
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;