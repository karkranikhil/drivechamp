import React from "react"
import './style.scss'
const Footer = () => {
    return (
        <footer id="footer_container" className="siteFooter">
            <div className="container">
                <div>
                   Drive Champ INC. &copy;{" "}
                    {new Date().getFullYear().toString()}{" "}
                </div>
            </div>
        </footer>
    )
}

export default Footer