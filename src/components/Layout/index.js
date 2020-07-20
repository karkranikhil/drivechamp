import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/index"
import Footer from "../Footer/index"
import "../../styles/style.scss"
import 'font-awesome/css/font-awesome.min.css';
const Layout = props => {
    return (
        <div>
            <Header />
            <div style={{paddingTop:"60px"}}>
                {props.children}
            </div>
            
            <Footer />
        </div>
    )
}

export default Layout