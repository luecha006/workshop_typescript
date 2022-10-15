import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import Routes from "./Routes";
import "./App.css";

function App() {
    //const [session, setSession] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => { }, [isLoggedIn]);

    if (isLoggedIn === false) {
        return (
            <div className="App">
                <LoginPage setSession={setIsLoggedIn} />
            </div>
        );
    } else {
        return (
            <div className="App">
                <Header />
                <NavBar setSession={setIsLoggedIn} />
                <Routes />
                <Footer />
            </div>
        );
    }
}

export default App;
