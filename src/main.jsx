import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Footer } from "./components/Footer.jsx";
import { ThemeToggle } from './components/ThemeToggle.jsx';
import { Navbar } from './components/Navbar.jsx';
import { StarBackground } from "@/components/StarBackground";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background Effects */}
    <StarBackground />
    <App />
    <Footer />
  </React.StrictMode>,
)
