import React from "react"
import '@/components/style.css'

export default function Navbar(props) {
    return (
         <nav
            style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)", // Add your box shadow values here
            }}
            className={props.darkMode ? "dark": ""}
        >
            <img
                className="nav--logo_icon"
                src="./react-icon-small.png"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}