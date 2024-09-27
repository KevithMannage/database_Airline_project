import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import HomePage from './HomePage.jsx';
import Offers from './Offers.jsx';
import Footer from './Footer.jsx';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import ContactPage from './ContactPage.jsx';
import About from './About.jsx';
import Flights from './flights.jsx';
import TermsAndConditions from './TermsAndConditions.jsx';
import Services from './Services.jsx';
import BookAndSearchFlight from './BookAndSearchFlight.jsx';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = (username, password) => {
        if (username && password) {
            setIsAuthenticated(true);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                        <Route path="/sign-up" element={<SignUpForm />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Airplanes" element={<Flights />} />

                        <Route path="/Flights" element={<BookAndSearchFlight />} />
                        



                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;