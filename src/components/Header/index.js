import React, { useState } from "react"
import { Link } from "gatsby"
import './style.scss'
const Header = () => {
    const [showMenu, setMenuState] = useState(false)
    const showHandler = () => {
        setMenuState(!showMenu)
    }
    return <header id="header_component">
        <div className="container-fluid header_bg">
            <div className="logo d-flex pl-sm-3 pr-sm-3">
                <div className="logo_name">
                    DRIVE CHAMP
                </div>
                <div className="ml-auto">
                    <div className="d-block d-sm-none mt-3" onClick={showHandler}>
                        <div className="hamberger"></div>
                        <div className="hamberger"></div>
                        <div className="hamberger"></div>
                    </div>
                    <div className="d-block d-sm-none">
                        {showMenu && <ul className="mobile_dropdown d-sm-flex menu_list">
                            <li><Link activeclass="active" className="test1" to="/#aboutus">About Drive Champ</Link></li>
                            <li><Link activeclass="active" className="test1" to="/#operators">Owner Operators</Link></li>
                            <li><Link activeclass="active" className="test1" to="/#ApplyForm">Application</Link></li>
                        </ul>}
                    </div>
                    <div className="d-none d-sm-block">
                        <ul className="mobile_dropdown d-sm-flex menu_list">
                            <li><Link activeclass="active" className="test1" to="/#aboutus">About Drive Champ</Link></li>
                            <li><Link activeclass="active" className="test1" to="/#operators">Owner Operators</Link></li>
                            <li><Link activeclass="active" className="test1" to="/#ApplyForm">Application</Link></li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    </header>
}

export default Header