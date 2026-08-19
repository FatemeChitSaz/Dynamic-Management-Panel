import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Users from "./Users";

function App() {
    return (
        <BrowserRouter>
            <div dir="rtl">
                <Navbar />
                <Sidebar />

                <main className="pt-16 mr-64 p-6 transition-all duration-300">
                    <Routes>
                        <Route path="/users" element={<Users />} />
                        {/* بعداً: /posts, /tasks, /comments */}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;